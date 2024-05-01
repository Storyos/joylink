import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useState, useTransition } from 'react'
import { supabase } from '../../App';

export default function Mypage () {
  
  

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Close");
  const handleOpenMessage = () => {
    setModalDisplay("Open");
  }

  const handleCloseMessage = () => {
    setModalDisplay("Close");
  }

  // mypage 메뉴
  const [mypageMenu, setMypageMenu] = useState("userInfo")
  const handleMypageMenu = (menu) => {
    setMypageMenu(`${menu}`)
  }

  return (
    <>

      {/* 메인 영역 */}
      <div className='pb-24 mx-48 my-12 rounded-3xl' style={{backgroundColor:'#c9c9c9'}}>
        <h2 className='py-8 text-center'>MyPage</h2>
        <div className='flex justify-around'>
          <div className='w-1/6 rounded-2xl' style={{backgroundColor:'#e9e9e9'}}>
            <div className='flex flex-col items-center justify-around' style={{minHeight:'500px'}}>
              <button className='font-bold'>내 정보 수정</button>
              <button className='font-bold'>내 동아리</button>
              <button className='font-bold'>신청 현황</button>
              <button className='font-bold' onClick={handleOpenMessage}>쪽지</button>
              <button className='font-bold' onClick={() => handleMypageMenu("application")}>신청 현황</button>
            </div>
          </div>
          <div className='w-3/5 p-8 rounded-xl' style={{backgroundColor:'#e9e9e9'}}>
            
            {/* 내 정보 */}
            {mypageMenu == "userInfo" &&
            <div>
              <table className='w-full'>

                <caption className='mb-8 font-bold'>내 정보</caption>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] min-w-[150px] p-2'>아이디(이메일)</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px]'>"abcd@naver.com"</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2'>이름</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>"1234"</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2'>성별</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>"남"</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2'>생년월일</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>"12345678"</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2'>전화번호</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>"010-1234-5678"</td>
                </tr>
                
              </table>
            </div>
            
            {/* 정보 수정 */}
            {mypageMenu == "updateInfo" && 
            <div>
              <p className='mb-8 font-bold text-center'>정보 수정</p>
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
              <table className='w-full'>
                <caption className='mb-8 font-bold'>내가 가입한 동아리</caption>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'> </th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2'>동아리 명</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>1</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px]'>동아리1</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>2</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px]'>동아리2</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>3</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px]'>동아리3</td>
                </tr>
              </table>
            </div>
            }

            {/* 신청 현황 */}
            {mypageMenu == "application" && 
            <div>
              <table className='w-full'>
                <caption className='mb-8 font-bold'>신청 중인 동아리</caption>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'> </th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2'>동아리 명</td>
                  <td className='border-2 border-[#c9c9c9] text-center'>신청 현황</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>1</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2'>동아리1</td>
                  <td className='border-2 border-[#c9c9c9] text-center'>신청 중</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>2</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2'>동아리2</td>
                  <td className='border-2 border-[#c9c9c9] text-center'>가입 완료</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>3</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2'>동아리 명</td>
                  <td className='border-2 border-[#c9c9c9] text-center'>신청 취소</td>
                </tr>
              </table>
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
      </div> 
      
      {/* 쪽지 modal box */}
      {modalDisplay == "Open" &&
        <MessageModal handleCloseMessage = {handleCloseMessage}/>
      }
    </>
  )
}