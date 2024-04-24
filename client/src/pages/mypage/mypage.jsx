
import { useState, useTransition } from 'react'
import { supabase } from '../../App';

export default function Mypage () {
    

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("none");
  const modalStyle = modalDisplay;
  const handleOpenMessage = () => {
    setModalDisplay("");
  }

  const handleCloseMessage = () => {
    setModalDisplay("none");
  }

  // 받은 쪽지, 보낸 쪽지 버튼
  const [recievedMessagebtn, setRecievedMessagebtn] = useState("");
  const [sentMessagebtn, setSentMessagebtn] = useState("none");
  
  const recievedMessageStyle = recievedMessagebtn;
  const sentMessageStyle = sentMessagebtn;

  const handleSentMessage = () => {
    // 여기서 메시지 제목, 받은사람, 날짜 query로 호출
    //  --> 받은사람은 join해서 찾기
    // select (제목, 받은사람,날짜 ) from messages 
    // where 보낸사람==내id 
    setRecievedMessagebtn("none");
    setSentMessagebtn("");
  }

  const handleRecievedMessage = () => {
    // 여기서 메시지 제목, 보낸사람, 날짜 query로 호출
    // --> 보낸사람은 join해서 찾기
    setRecievedMessagebtn("");
    setSentMessagebtn("none");
  }

  // 받은 쪽지, 보낸 쪽지 list 변수
  const [receivedMessage,setRecievedMessage] = useState([]);
  const [sentMessage,setSentMessage] = useState([]);
  


  // 쪽지 쓰기 버튼
  const [messageListDisplay, setMessageListDisplay] = useState("");  
  const [messageWriteDisplay, setMessageWriteDisplay] = useState("none");
  
  const messageListStyle = messageListDisplay;
  const messageWriteStyle = messageWriteDisplay;
  
  const handleMessageWrite = () => {
    setMessageListDisplay(messageListDisplay ? "" : "none");
    setMessageWriteDisplay(messageWriteDisplay ? "" : "none");
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

  return (
    <>

      {/* 메인 영역 */}
      <div className='pb-24 mx-48 my-12 rounded-3xl' style={{backgroundColor:'#c9c9c9'}}>
        <h2 className='py-8 text-center'>MyPage</h2>
        <div className='flex justify-around'>
          <div className='w-1/6 rounded-2xl' style={{backgroundColor:'#e9e9e9'}}>
            <div className='flex flex-col items-center justify-around' style={{minHeight:'500px'}}>
              <button className='font-bold'>내 정보</button>
              <button className='font-bold'>정보 수정</button>
              <button className='font-bold'>내 동아리</button>
              <button className='font-bold' onClick={handleOpenMessage}>쪽지</button>
              <button className='font-bold'>신청 현황</button>
            </div>
          </div>
          <div className='w-3/5 p-8 rounded-xl' style={{backgroundColor:'#e9e9e9'}}>
            <p className='mb-12'>내정보</p>
            {/* 내정보 표로 만들기 */}
            <ul className='mypage_content_list'>
              <li className='mb-2'>아이디(이메일) : </li>
              <li className='mb-2'>이름 : </li>
              <li className='mb-2'>성별 : </li>
              <li className='mb-2'>생년월일 : </li>
              <li className='mb-2'>전화번호 : </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 쪽지 modal box */}
      <div id = "mypage_message" className='fixed inset-0 p-4 m-auto bg-white border border-black border-solid' style={{width:'650px',height:'650px', display:modalStyle}} >
        <h1 className='mb-4' >쪽지</h1>
        
        <div id='message_list' style={{display:messageListStyle}}>
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
          
          {/* 받은 쪽지 */}
          <div style={{display:recievedMessageStyle}}>
            {/* 리스트 상단 */}
            <div className='flex p-2 mb-4 border-2'>
              <input type="checkbox" />
              <div className='flex justify-center w-full mx-2'>
                <button>보낸 사람</button>
                <button className='mx-48'>제목</button>
                <button>날짜</button>
              </div>
            </div>
            
            {/* 쪽지 리스트 */}
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
          </div>

          {/* 보낸 쪽지 */}
          <div style={{display:sentMessageStyle}}>
            {/* 리스트 상단 */}
            <div className='flex p-2 mb-4 border-2'>
              <input type="checkbox" />
              <div className='flex justify-center w-full mx-2'>
                <button>받은 사람</button>
                <button className='mx-48'>제목</button>
                <button>날짜</button>
              </div>
            </div>
            
            {/* 쪽지 리스트 */}
            <div className='mb-4 border-2'>
              
              <div className='flex items-center p-2 mb-4'>
                <input type="checkbox"/>
                <div className='flex justify-between w-full mx-2'>
                  <div>
                    <p className='inline-block ml-1 text-center w-28'>user1</p>
                    <a href='#' className='ml-2'>쪽지 보내기 1</a>
                  </div>
                  <button className='w-20 text-sm'>2024-04-14</button>
                </div>
              </div>
              
              <div className='flex items-center p-2 mb-4'>
                <input type="checkbox" />
                <div className='flex justify-between w-full mx-2'>
                  <div>
                    <p className='inline-block ml-1 text-center w-28'>user2</p>
                    <a href='#' className='ml-2'>쪽지 보내기 2</a>
                  </div>
                  <button className='w-20 text-sm'>2024-04-13</button>
                </div>
              </div>
    
              <div className='flex items-center p-2 mb-4'>
                <input type="checkbox" />
                <div className='flex justify-between w-full mx-2'>
                  <div>
                    <p className='inline-block ml-1 text-center w-28'>user3</p>
                    <a href='#' className='ml-2'>쪽지 보내기 3</a>
                  </div>
                  <button className='w-20 text-sm'>2024-04-12</button>
                </div>
              </div>
    
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className='flex justify-end'>
            <button className='p-1 px-3 mr-1 border-2'>삭제</button>
            <button className='p-1 px-3 border-2' onClick={handleCloseMessage}>닫기</button>
          </div>
        </div>
      
        <div id='message_write' className='p-1 border-2' style={{display:messageWriteStyle}}>
          
          {/* 쪽지 쓰기 화면*/}
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
        
      </div>

    </>
  )
}