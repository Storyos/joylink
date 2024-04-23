import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../App";
// 여기에 들고올수있나?
export default function Chatting() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState([]);
    const [club_seq, setClub_seq] = useState(null);
    const [user_seq, setUser_seq] = useState(null);
    const [myemail, setMyEmail] = useState(null);

    // 내정보 Update 받는곳
    useEffect(() => {
        async function getEmailnUserSeq() {
            const session = await supabase.auth.getUser();
            if (session.data.user) {
                console.log("your Email:", session.data.user.email);
                setMyEmail(session.data.user.email);
            }
        }
        async function getMessages() {
            const { data, error } = await supabase.from('chats').select('chat_content').eq('club_seq', 1);
            setMessages(data);
        }
        getMessages();
        getEmailnUserSeq();

        supabase
                .channel(`room_${club_seq}`)
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, handleInserts)
                .subscribe();
    }, []);

    // myemail이 업데이트되면 user_seq를 가져오기
    useEffect(() => {
        async function fetchUserSeq() {
            if (myemail) {
                const { data, error } = await supabase.from('users').select('user_seq').eq('user_id', myemail).single();
                if (error) {
                    console.error('Error fetching user_seq:', error);
                    return;
                }
                setUser_seq(data.user_seq);
                console.log("your user_seq: ", data.user_seq);
            }
        }
        fetchUserSeq();
    }, [myemail]); // myemail이 변경될 때마다 이 효과 실행


    // clubseq는 clubpage가 완성되면 거기서 받아올 예정.
    // 현재는 clubseq는 상수값을 넣어서 test할 예정. (04/22) 추후 수정 필요

    const handleInserts = (payload) => {
        console.log('Message Received!', payload);
        const newMessage = payload.new; // 'new' 프로퍼티에 새 메시지 정보가 들어있다고 가정합니다.
        setMessages([...messages, newMessage]);
    }
    
    // const handleInserts = (payload) => {
    //     // 여기서 insert된 메시지 출력 예정
    //     console.log('Message Received!', payload.new)

    //     async function getMessages() {
    //         setMessages([...messages,payload.new]);
    //     }
    //     getMessages();
    // }

    // 메시지 전송
    // 추후 club_seq 정보 수정 필요!!!
    const handleMessageInsert = async () => {
        try {
            await supabase.from('chats').insert({
                club_seq: 1,
                user_seq: user_seq,
                chat_content: input
            })
            console.log("메시지가 전송되었습니다.");
        }
        catch (error) {
            console.error("메시지 전송 에러", error);
        }
    }

    // 
    // 채팅 전송
    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([input]);
        setInput('');
    };

    return (
        <div>
            <h1>Chat Room</h1>
            <div>
                {messages.map((msg, index) => (
                    
                // msg.user_seq==='내user_seq'?내 말풍선:남의 말풍선 처리 필요
                <div key={index}>{msg.chat_content}</div> // msg.chat_content로 가정합니다.
                
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleMessageInsert} type="submit">Send</button>
            </form>
        </div>
    );

}
