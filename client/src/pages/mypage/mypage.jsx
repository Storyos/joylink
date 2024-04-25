
import { useState, useTransition } from 'react'
import { supabase } from '../../App';
import MessageModal from '../../components/messageModal';

export default function Mypage () {
    

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Open");
  const modalStyle = modalDisplay;
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
            
            {/* 내 정보 */}
            {mypageMenu == "userInfo" &&
            <div>
              <p className='mb-12'>내정보</p>
              <ul className='mypage_content_list'>
                <li className='mb-2'>아이디(이메일) : </li>
                <li className='mb-2'>이름 : </li>
                <li className='mb-2'>성별 : </li>
                <li className='mb-2'>생년월일 : </li>
                <li className='mb-2'>전화번호 : </li>
              </ul>
            </div>
            }
            
            {/* 정보 수정 */}
            {mypageMenu == "updateInfo" && 
            <div>
              <p className='mb-12'>정보 수정</p>
              <ul>
                <li><label htmlFor="">아이디(이메일) <input type="text" className='w-full rounded'/></label></li>
                <li><label htmlFor="">비밀번호 <input type="text" className='w-full rounded'/></label></li>
                <li><label htmlFor="">이름 <input type="text" className='w-full rounded'/></label></li>
                <li><label htmlFor="">전화번호 <input type="text" className='w-full rounded'/></label></li>
              </ul>
              <div className='flex justify-end'>
                <button className='border-2 border-[#c9c9c9] p-1 mt-2'>수정하기</button>
              </div>
            </div>
            }

            {/* 내 동아리 */}
            {mypageMenu == "myclub" && 
            <div>
              <p className='mb-12'>내 동아리</p>
            </div>
            }

            {/* 신청 현황 */}
            {mypageMenu == "application" && 
            <div>
              <p className='mb-12'>신청 현황</p>
            </div>
            }
            
            

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