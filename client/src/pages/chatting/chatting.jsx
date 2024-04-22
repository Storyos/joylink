import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../App";
// 여기에 들고올수있나?
export default function Chatting() {
    const [messages, setMessages] = useState([null]);
    const [input, setInput] = useState(null);
    const [club_seq, setClub_seq] = useState(null);
    const handleInserts = (payload) => {
        // 여기서 insert된 메시지 출력 예정
        console.log('Change Received!',payload)
    }
    const handleMessageInsert = async () =>{
        const {data,error} = await supabase.from('chats').insert({})
    }
    // 
    supabase
    .channel(`room_${club_seq}`)
    .on('postgres_changes',{event: 'INSERT', schema: 'public', table: 'chats'},handleInserts)
    .subscribe()

    // 채팅 전송
    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <div>
            <h1>Chat Room</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} message={msg} />
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
