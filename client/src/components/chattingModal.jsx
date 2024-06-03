import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { supabase } from "../App";
import useUserStore from "../zustand/useUserStore";

export default function ChattingModal() {
  const [imgErrors, setImgErrors] = useState({});
  const user_seq = useUserStore(state => state.user.user_seq);
  const club_seq = 1;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function loadInitialMessages() {
    const { data, error } = await supabase
      .from('chats')
      .select(`chat_seq, club_seq, user_seq, chat_time, chat_content, users: user_seq (user_name)`)
      .eq('club_seq', club_seq)
      .order('chat_time', { ascending: true });

    if (error) {
      console.error('Error loading messages:', error);
    } else {
      setMessages(data);
    }
  }

  useEffect(() => {
    async function messageSubscription() {
      await supabase
        .channel('room1')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats', filter: `club_seq=eq.${club_seq}` }, handlesubscribe)
        .subscribe();
    }
    messageSubscription();
    loadInitialMessages();
  }, []);

  const handlesubscribe = () => {
    loadInitialMessages();
  }

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setInput('');
  };

  const handleMessageInsert = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

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
        setInput('');
      }
    } catch (error) {
      console.error("메시지 전송 에러", error);
    }
  }

  const handleImageError = (user_seq) => {
    setImgErrors(prevErrors => ({ ...prevErrors, [user_seq]: true }));
  };

  return (
    <div className="fixed w-[450px] h-[500px] inset-0 m-auto bg-[#e9e9e9] pb-2">
      <div className="relative w-full h-full">
        <div className="mt-2 text-center">채팅</div>
        {/* <button className="absolute text-[#a9a9a9] right-4 top-0">X</button> */}

        <div className="absolute flex flex-col w-[450px] h-[400px] overflow-auto pb-4">
          {messages.map((msg, index) => {
            const imgURL = `https://vtvkgtqvczyuteenfadw.supabase.co/storage/v1/object/public/profile_image/img/${msg.user_seq}.jpg`;
            const imgError = imgErrors[msg.user_seq];

            return (
              msg.user_seq === user_seq ?
                <div key={index} className="flex self-end my-2">
                  <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">{msg.chat_content}</div>
                </div> :
                <div key={index} className="flex my-2 ml-4">
                  {imgURL && !imgError ?
                    <img src={imgURL} alt="Profile" className="w-[30px] h-[30px] inline-block rounded-[10px] mt-2" onError={() => handleImageError(msg.user_seq)} /> :
                    <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
                  }
                  <div className="inline-block ml-4">
                    <div>{msg.users.user_name}</div>
                    <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">{msg.chat_content}</div>
                  </div>
                </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        <div className="absolute bottom-0 bg-white">
          <form onSubmit={sendMessage}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} rows={3} className="w-[450px] resize-none outline-none pt-2 px-2" placeholder="채팅 입력"></input>
            <div className="text-end">
              <button onClick={handleMessageInsert} type="submit" className="px-5 py-1 mb-2 mr-2 border-2 bg-[#e9e9e9] rounded-[20px]">전송</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
