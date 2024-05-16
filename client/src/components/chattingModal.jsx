import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { supabase } from "../App";
import useUserStore from "../zustand/useUserStore";

export default function ChattingModal() {

  // 여기는 나중에 Zustand로 변경할 예정
  const user_seq = useUserStore(state => state.user.user_seq);
  const club_seq = 1
  // messages : 채팅들을 저장하는 곳
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState([]);
  const messagesEndRef = useRef(null); // Ref for the messages container

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();  
  }, [messages]); 
  
  async function loadInitialMessages() {
    const { data, error } = await supabase
      .from('chats')
      .select(`chat_seq,
      club_seq,
      user_seq,
      chat_time,
      chat_content,
      users : user_seq (
        user_name
      )
      `)
      .eq('club_seq', club_seq)
      .order('chat_time', { ascending: true });

    if (error) {
      console.error('Error loading messages:', error);
    } else {
      setMessages(data);
    }
  }

  useEffect(() => {
    // 실시간 메시지 구독 설정
    async function messageSubscription() {
      await supabase
        .channel('room1')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats', filter: `club_seq=eq.${club_seq}` }, handlesubscribe)
        .subscribe()
    }
    messageSubscription();
    loadInitialMessages();
  }, [])

  const handlesubscribe = () => {
    loadInitialMessages();
  }


  // 채팅입력창의 input정보 받기
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setInput('');
  };

  //  메시지 전송
  const handleMessageInsert = async (e) => {
    e.preventDefault(); // 폼 전송 기본 동작 막기
    if (!input.trim()) return; // 입력값이 비어있으면 반환

    try {
      const { error } = await supabase.from('chats').insert({
        club_seq: club_seq,
        user_seq: user_seq,
        chat_content: input
      });

      if (error) {
        console.error('Message send error', error);
      } else {
        console.log("메시지가 전송되었습니다.", input);
        setInput(''); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("메시지 전송 에러", error);
    }
  }



  return (
    <>
      <div className="fixed rounded-[10px] w-[450px] h-[500px] inset-0 m-auto bg-[#e9e9e9] shadow-lg ">
        <div className="relative w-full h-full">
          <div className="mt-2 text-center">채팅</div>
          <button className="absolute text-[#a9a9a9] right-4 top-0" >X</button>

          {/* 채팅 영역 */}
          <div className="absolute flex flex-col w-[420px] h-[400px] overflow-auto">
            {messages.map((msg, index) => (
              msg.user_seq === user_seq ?
                <div className="flex self-end my-2 ">
                  <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">{msg.chat_content}</div>
                </div> :
                <div className="flex my-2 ml-4">
                  <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
                  <div className="inline-block ml-4">
                    <div>{msg.users.user_name}</div>
                    <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">{msg.chat_content}</div>
                  </div>
                </div>

            ))}

            <div ref={messagesEndRef} />
          </div>
          {/* 채팅 입력창 */}
          <div className="absolute bottom-0 rounded-b-[10px] bg-white ">

            <form onSubmit={sendMessage}>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} rows={3} className="w-[450px] resize-none outline-none pt-2 px-2" placeholder="채팅 입력"></input>
              <div className="text-end">
                <button onClick={handleMessageInsert} type="submit" className="px-5 py-1 mb-2 mr-2 border-2 bg-[#e9e9e9] rounded-[20px]">전송</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}