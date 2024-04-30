
import { useState, useTransition } from 'react'
import { supabase } from '../../App';
import MessageModal from '../../components/messageModal';

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
      {/* <Header />
      <div className='mypage_box'>
        <h2 className='mypage_title'>MyPage</h2>
        <div className='mypage_content_box'>
          <div className='mypage_menu'>
            <div className='mypage_menu_list'>
              <button>내 정보 수정</button>
              <button>내 동아리</button>
              <button>신청 현황</button>
              <button>쪽지</button>
              <button>북마크</button>
            </div>
          </div>
          <div className='mypage_content'>
            <p className='mypage_content_title'>내정보</p>
            <ul className='mypage_content_list'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div> */}
      
      {/* 쪽지 modal box */}
      {modalDisplay == "Open" &&
        <MessageModal handleCloseMessage = {handleCloseMessage}/>
      }
    </>
  )
}