import { useEffect, useState, useTransition } from "react";
import { supabase } from '../App';

export default function MessageModal(props) {
  // 메시지 모달창 닫기
  const handleCloseMessage = props.handleCloseMessage;

  // 받은 쪽지, 보낸 쪽지 버튼
  const [messageBtn, setMessageBtn] = useState("Recieved");

  const [title, setTitle] = useState("");
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");

  // 받은 쪽지, 보낸 쪽지 list 변수
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [sentMessage, setSentMessage] = useState([]);

  // 쪽지 페이지를 저장하는 배열
  const [receivedPage, setReceivedPage] = useState([]);
  const [sentPage, setSentPage] = useState([]);

  const [userseq,setUserSeq] =useState("");
  
  // 현재 페이지의 상태가 저장되어 있는 변수, 기본값 : 1 페이지
  const [currentReceivedPage, setCurrentReceivedPage] = useState(1)
  const [currentSentPage, setCurrentSentPage] = useState(1)
  
  // 페이지 버튼 클릭 시 현재 페이지의 상태 전환
  const handlePageBtn = (messageType,page) => {
    if (messageType === "Received") setCurrentReceivedPage(page); console.log(page)
    if (messageType === "Sent") setCurrentSentPage(page); console.log(page)
  }

  
  const fetchReceivedMessages = async () => {
    const { data, error } = await supabase.from('messages').select(`*`).eq('msg_rcv_seq', 13);
    if (error) {
      console.error("받은 쪽지 select query 에러", error);
    } else {
      console.log('받은 데이터', data);
      setReceivedMessage(data);
      
    }
  };

  useEffect(()=>{
      // 받은 쪽지 페이지 개수 계산해서 배열로 저장
      let count = (Math.floor((receivedMessage.length-1)/5)+1);
      let list = [];
      for (let i = 1; i <= count; i ++) {
        list.push(i);
      }
      setReceivedPage(list);
  },[receivedMessage])
  
  // 컴포넌트가 마운트될 때 받은 쪽지를 로드 (1회수행)
  useEffect(() => {
    fetchReceivedMessages();
  }, []);

  const handleSentMessage = async () => {
    // 함수명 :fetchSntData()
    // 기  능 :DB에서 내가 보낸쪽지 가져오기
    // 여기서 13은 임의로 보낸사람 seq저장한것
    const { data, error } = await supabase.from('messages').select(`*`).eq(`msg_snd_seq`, 13)
    if (error) {
      console.error("보낸쪽지 select query 에러");
    }
    console.log('보낸 데이터', data);
    setSentMessage(data);

    // 보낸 쪽지 페이지 개수 계산해서 배열로 저장
    let count = (Math.floor((data.length - 1) / 5) + 1);
    let list = [];
    for (let i = 1; i <= count; i++) {
      list.push(i);
    }
    setSentPage(list);
    setMessageBtn("Sent");
  }

  const handleRecievedMessage = async () => {

    // 여기서 처음 들어왔을때 data를 미리 저장해두고, 
    // 함수명 :fetchRcvData()
    // 기  능 :DB에서 내가 받은쪽지 가져오기
    // 여기서 1은 임의로 받은사람 저장한것
    const { data, error } = await supabase.from('messages').select(`*`).eq('msg_rcv_seq', 13)
    if (error) {
      console.error("받은 쪽지 select query 에러");
    }
    console.log('받은 데이터', data);
    setReceivedMessage(data);

    setMessageBtn("Recieved")
  }



  // 쪽지 쓰기 버튼
  const [messageWriteBtn, setMessageWriteBtn] = useState("List")

  const handleMessageWrite = () => {
    setMessageWriteBtn(messageWriteBtn == "List" ? "Write" : "List")
  }

  // 쪽지 전송 버튼
  const handleMessageSend = async () => {
    const { data, error } = await supabase.from('messages').insert({
      'msg_title': title,
      'msg_body': content,
      'msg_rcv_seq': receiver,
      'msg_snd_seq': 13
    })

    // 전송쪽 다시 초기화
    setTitle("");
    setContent("");
    setReceiver("");

    if (error) {
      console.error(error);
    }
    console.log(data);
    alert("쪽지 전송이 완료되었습니다.")
    //쪽지 리스트로 돌아가기
    handleMessageWrite();
  }

  // 쪽지 쓸때 보낼꺼
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
              <p>
                {messageBtn == "Recieved" && "보낸 사람"}
                {messageBtn == "Sent" && "받은 사람"}
              </p>
              <p className='mx-48'>제목</p>
              <p>날짜</p>
            </div>
          </div>
          {/* // 받은쪽지 보는곳 */}
          {messageBtn === "Recieved" &&
            <div className="text-center">
              <div className='mb-1 border-2'>
                {receivedMessage.length > 0 ? (
                  // 현재 페이지의 5개 쪽지 정보 표시
                  receivedMessage.slice((currentReceivedPage-1)*5,currentReceivedPage*5).map((msg, index) => (
                    <div key={index} className='flex items-center p-2 mb-4'>
                      <input type="checkbox" />
                      <div className='flex justify-between w-full mx-2'>
                        <div>
                          <p className='inline-block ml-1 text-center w-28'>{msg.msg_snd_seq}</p>
                          <a href='#' className='ml-2'>{msg.msg_body}</a>
                        </div>
                        <p className='w-20 text-sm'>{msg.msg_send_time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>받은 쪽지가 없습니다.</p>
                )}
              </div>
              
              {/* 하단에 페이지 버튼 표시 */}
              <div>
                {receivedPage.map((page, index) => (
                  <button key ={index}
                    className={`mx-1 ${page === currentReceivedPage ? 'text-black' : 'text-[#c9c9c9]'}`} 
                    onClick={() => handlePageBtn("Received",page)}>
                      {page}
                  </button>
                ))} 
              </div>
            </div>
          }

          {/* // 보낸쪽지 보는곳 */}
          {messageBtn === "Sent" &&
            <div className="text-center">
              <div className='mb-1 border-2'>
                {sentMessage.length > 0 ? (
                  // 현재 페이지의 5개 쪽지 정보 표시
                  sentMessage.slice((currentSentPage-1)*5,currentSentPage*5).map((msg, index) => (
                    <div key={index} className='flex items-center p-2 mb-4'>
                      <input type="checkbox" />
                      <div className='flex justify-between w-full mx-2'>
                        <div>
                          <p className='inline-block ml-1 text-center w-28'>{msg.msg_rcv_seq}</p>
                          <a href='#' className='ml-2'>{msg.msg_body}</a>
                        </div>
                        <p className='w-20 text-sm'>{msg.msg_send_time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>보낸 쪽지가 없습니다.</p>
                )}
              </div>
              
              {/* 하단에 페이지 버튼 표시 */}
              <div>
                {sentPage.map((page, index) => (
                  <button key ={index}
                    className={`mx-1 ${page === currentSentPage ? 'text-black' : 'text-[#c9c9c9]'}`} 
                    onClick={() => handlePageBtn("Sent",page)}>
                      {page}
                  </button>
                ))}        
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
          <input className='px-1 border-2' type="text" placeholder='제목 검색' />
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
              <input id='message_write_title' type="text" className='border-2' style={{ width: '450px' }} onChange={() => handleTitleChange} />
            </div>
            <div className='py-2'>
              <label htmlFor="message_write_receiver"><p className='inline-block text-center w-28'>받는 사람</p></label>
              <input id='message_write_receiver' type="text" className='border-2' style={{ width: '450px' }} onChange={() => handlereceiverChange} />
            </div>
            <div className='flex py-2 '>
              <label htmlFor="message_write_content"><p className='inline-block text-center w-28'>내용</p></label>
              <textarea id="message_write_content" className='border-2 resize-none' style={{ width: '450px', height: '300px' }} onChange={() => handleContentChange}></textarea>
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
      <div id="mypage_message" className='fixed inset-0 p-4 m-auto bg-white border border-black border-solid' style={{ width: '650px', height: '650px' }} >
        <h1 className='mb-4' >쪽지</h1>

        {messageWriteBtn == "List" &&
          <MessageList />
        }
        {messageWriteBtn == "Write" &&
          <MessageWrite />
        }
      </div>
    </>
  )
}