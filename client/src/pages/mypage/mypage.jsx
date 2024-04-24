
import { useState, useTransition } from 'react'
import { supabase } from '../../App';
import MessageModal from '../../components/messageModal';

export default function Mypage () {
    

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Close");
  const handleOpenMessage = () => {
    setModalDisplay("Open");
  }
  const handleCloseMessage = () => {
    setModalDisplay("Close");
  }

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
      {modalDisplay == "Open" &&
        <MessageModal handleCloseMessage = {handleCloseMessage}/>
      }
    </>
  )
}