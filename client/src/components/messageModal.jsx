import { useState, useTransition } from "react";
import { supabase } from '../App';

export default function MessageModal (props) {
  // 메시지 모달창 닫기
  const handleCloseMessage = props.handleCloseMessage;

  // 받은 쪽지, 보낸 쪽지 버튼
  const [messageBtn, setMessageBtn] = useState("Recieved");

  const handleSentMessage = () => {
    // 여기서 메시지 제목, 받은사람, 날짜 query로 호출
    //  --> 받은사람은 join해서 찾기
    // select (제목, 받은사람,날짜 ) from messages 
    // where 보낸사람==내id 
    setMessageBtn("Sent")
  }

  const handleRecievedMessage = () => {
    // 여기서 메시지 제목, 보낸사람, 날짜 query로 호출
    // --> 보낸사람은 join해서 찾기
    setMessageBtn("Recieved")
  }

  // 받은 쪽지, 보낸 쪽지 list 변수
  const [receivedMessage,setRecievedMessage] = useState([]);
  const [sentMessage,setSentMessage] = useState([]);
  


  // 쪽지 쓰기 버튼
  const [messageWriteBtn, setMessageWriteBtn] = useState("List")
  
  const handleMessageWrite = () => {
    setMessageWriteBtn(messageWriteBtn == "List" ? "Write" : "List")
  }
  
  // 쪽지 전송 버튼
  const handleMessageSend = async () => {
    const {data,error}= await supabase.from('messages').insert({
      'msg_title':title,
      'msg_body':content,
      'msg_rcv_seq':receiver,
      'msg_snd_seq':13
    })
    
    // 전송쪽 다시 초기화
    setTitle("");
    setContent("");
    setReceiver("");
    
    if(error){
      console.error(error);
    }
    console.log(data);
    alert("쪽지 전송이 완료되었습니다.")
    handleMessageWrite();
  }

  // 쪽지 쓸때 보낼꺼
  const [title,setTitle] = useState("");
  const [receiver,setReceiver] = useState("");
  const [content,setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlereceiverChange = (event) => {
    setReceiver(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // 쪽지 리스트
  const MessageListContents = () => {
    return (
      <>
      <div>
        
              {/* 리스트 상단 */}
              <div className='flex p-2 mb-4 border-2'>
                <input type="checkbox" />
                <div className='flex justify-center w-full mx-2'>
                  <button>
                    {messageBtn == "Recieved" && "보낸 사람"}
                    {messageBtn == "Sent" && "받은 사람"}
                  </button>
                  <button className='mx-48'>제목</button>
                  <button>날짜</button>
                </div>
              </div>
              
              {messageBtn == "Recieved" && 
              <div className='mb-4 border-2'>
                {/*여기서 쪽지 정보를 받아서 출력 */}
                <div className='flex items-center p-2 mb-4'>
                  <input type="checkbox"/>
                  <div className='flex justify-between w-full mx-2'>
                    <div>
                      <p className='inline-block ml-1 text-center w-28'>user1</p>
                      <a href='#' className='ml-2'>동아리 오리엔테이션 일정 공지</a>
                    </div>
                    <button className='w-20 text-sm'>2024-04-14</button>
                  </div>
                </div>
                
                <div className='flex items-center p-2 mb-4'>
                  <input type="checkbox" />
                  <div className='flex justify-between w-full mx-2'>
                    <div>
                      <p className='inline-block ml-1 text-center w-28'>user2</p>
                      <a href='#' className='ml-2'>회비 관련 문의드립니다.</a>
                    </div>
                    <button className='w-20 text-sm'>2024-04-13</button>
                  </div>
                </div>
      
                <div className='flex items-center p-2 mb-4'>
                  <input type="checkbox" />
                  <div className='flex justify-between w-full mx-2'>
                    <div>
                      <p className='inline-block ml-1 text-center w-28'>user3</p>
                      <a href='#' className='ml-2'>동아리 가입 신청합니다.</a>
                    </div>
                    <button className='w-20 text-sm'>2024-04-12</button>
                  </div>
                </div>
      
              </div>
                }
                
                { messageBtn == "Sent" &&
                  <div className='mb-4 border-2'>
              
                  <div className='flex items-center p-2 mb-4'>
                    <input type="checkbox"/>
                    <div className='flex justify-between w-full mx-2'>
                      <div>
                        <p className='inline-block ml-1 text-center w-28'>user1</p>
                        <a href='#' className='ml-2'>보낸 쪽지 1</a>
                      </div>
                      <button className='w-20 text-sm'>2024-04-14</button>
                    </div>
                  </div>
                  
                  <div className='flex items-center p-2 mb-4'>
                    <input type="checkbox" />
                    <div className='flex justify-between w-full mx-2'>
                      <div>
                        <p className='inline-block ml-1 text-center w-28'>user2</p>
                        <a href='#' className='ml-2'>보낸 쪽지 2</a>
                      </div>
                      <button className='w-20 text-sm'>2024-04-13</button>
                    </div>
                  </div>
        
                  <div className='flex items-center p-2 mb-4'>
                    <input type="checkbox" />
                    <div className='flex justify-between w-full mx-2'>
                      <div>
                        <p className='inline-block ml-1 text-center w-28'>user3</p>
                        <a href='#' className='ml-2'>보낸 쪽지 3</a>
                      </div>
                      <button className='w-20 text-sm'>2024-04-12</button>
                    </div>
                  </div>
        
                </div>
                }
            </div>
      </>
    )
  }
  
  // 쪽지 리스트 화면
  const MessageList = () => {
    return (
      <div id='message_list'>
            
            {/* 상단 버튼 */}
            <div className='flex justify-between mb-4'>
              <span className='p-1 border-2'>
                <button className='mx-4' onClick={handleRecievedMessage}>받은 쪽지</button>
                <button className='mx-4' onClick={handleSentMessage}>보낸 쪽지</button>
              </span>
              <button onClick={handleMessageWrite} className='p-1 border-2'>쪽지 쓰기</button>
            </div>
            
            {/* 검색창 */}
            <div className='flex justify-end mb-4'>
              <input className='px-1 border-2' type="text" placeholder='제목 검색'/>
            </div>

            {/* 쪽지 리스트  */}
            <MessageListContents />

            {/* 하단 버튼 */}
            <div className='flex justify-end'>
              <button className='p-1 px-3 mr-1 border-2'>삭제</button>
              <button className='p-1 px-3 border-2' onClick={handleCloseMessage}>닫기</button>
            </div>
          </div>
    )
  }
  
  // 쪽지 쓰기 화면
  const MessageWrite = () => {
    return (
      <>
        <div id='message_write' className='p-1 border-2'>
              
          <div>
            <div className='py-2'>
              <label htmlFor="message_write_title"><p className='inline-block text-center w-28'>제목</p></label> 
              <input id='message_write_title' type="text" className= 'border-2' style={{width:'450px'}} onChange={handleTitleChange}/>
            </div>
            <div className='py-2'>
              <label htmlFor="message_write_receiver"><p className='inline-block text-center w-28'>받는 사람</p></label> 
              <input id='message_write_receiver' type="text" className= 'border-2' style={{width:'450px'}} onChange={handlereceiverChange}/>
            </div>
            <div className='flex py-2 '>
              <label htmlFor="message_write_content"><p className='inline-block text-center w-28'>내용</p></label>
              <textarea id="message_write_content" className='border-2 resize-none'  style={{width:'450px', height:'300px'}} onChange={handleContentChange}></textarea>
            </div>
          </div>
          
          <div className='flex justify-end'>
            <button className='p-1 px-3 mr-1 border-2' onClick={handleMessageSend}>전송</button>
            <button className='p-1 px-3 border-2' onClick={handleMessageWrite}>목록</button>
          </div>
          
        </div>
      </>
    )
  }

  return (
    <>
      <div id = "mypage_message" className='fixed inset-0 p-4 m-auto bg-white border border-black border-solid' style={{width:'650px',height:'650px'}} >
          <h1 className='mb-4' >쪽지</h1>
          
          { messageWriteBtn == "List" &&
            <MessageList />
          }
          { messageWriteBtn == "Write" &&
            <MessageWrite />
          }
      </div>
    </>
  )
}