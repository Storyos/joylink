import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../App";

export default function ChattingModal() {

  // 여기는 나중에 Zustand로 변경할 예정
  const user_seq = 13
  const club_seq = 1
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState([]);


    useEffect(() => {
      // 초기 메시지 로딩
      async function loadInitialMessages() {
        const { data, error } = await supabase
          .from('chats')
          .select('*')
          .eq('club_seq', club_seq)
          .order('created_at', { ascending: false });
    
        if (error) {
          console.error('Error loading messages:', error);
        } else {
          setMessages(data);
        }
      }
    
      loadInitialMessages();
    
      // 실시간 메시지 구독 설정
      async function messageSubscription(){ supabase
        .from(`chats:club_seq=eq.${club_seq}`)
        .on('INSERT', ({ new: newMessage }) => {
          setMessages(prevMessages => [...prevMessages, newMessage]);
        })
        .subscribe();
      }
      
      // 구독 해제
      return () => {
        supabase.removeSubscription(messageSubscription);
      };
    }, [club_seq]);
    


  // 채팅입력창의 input정보 받기
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([input]);
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
        console.log("메시지가 전송되었습니다.");
        setInput(''); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("메시지 전송 에러", error);
    }
  }
  


  return (
    <>
      <div className="fixed rounded-[10px] w-[450px] h-[500px] inset-0 m-auto bg-[#e9e9e9] shadow-lg">
        <div className="relative w-full h-full">
          <div className="mt-2 text-center">채팅</div>
          <button className="absolute text-[#a9a9a9] right-4 top-0" >X</button>

          {/* 채팅 영역 */}
          <div className="absolute flex flex-col w-[420px]">

            {/* 남이 쓴 채팅 */}
            <div className="flex my-2 ml-4">
              <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
              <div className="inline-block ml-4">
                <div>user1</div>
                <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">가나다라마바사</div>
              </div>
            </div>

            {/* 내가 쓴 채팅 */}
            <div className="flex self-end my-2 ">
              <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅</div>
            </div>

            <div className="flex my-2 ml-4">
              <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
              <div className="inline-block ml-4">
                <div>user2</div>
                <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅</div>
              </div>
            </div>

            <div className="flex self-end my-2">
              <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">내가 쓴 채팅</div>
            </div>

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