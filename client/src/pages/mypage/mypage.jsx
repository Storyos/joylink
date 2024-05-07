
import { useState, useTransition } from 'react'
import { supabase } from '../../App';
import MessageModal from '../../components/messageModal';

export default function Mypage () {
    

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Close");
  const handleOpenMessage = () => {
    console.log("모달창 여는중..")
    setModalDisplay("Open");
  }

  const handleCloseMessage =  () => {
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
      <div className='pt-12 pb-24 mx-80 rounded-3xl'>
        <p className='p-1 mb-4 text-2xl font-bold'>마이페이지</p>
        <div className='flex justify-between'>
          <div className='w-[12%] rounded-[10px] bg-[#e9e9e9]'>
            <div className='flex flex-col items-center min-h-[500px] py-4'>
              <button className={'font-bold text-[#a9a9a9] my-2 '+ (mypageMenu === 'userInfo' && 'text-black')} onClick={() => handleMypageMenu("userInfo")}>내 정보</button>
              <button className={'font-bold text-[#a9a9a9] my-2 '+ (mypageMenu === 'updateInfo' && 'text-black')} onClick={() => handleMypageMenu("updateInfo")}>정보 수정</button>
              <button className={'font-bold text-[#a9a9a9] my-2 '+ (mypageMenu === 'myclub' && 'text-black')} onClick={() => handleMypageMenu("myclub")}>내 동아리</button>
              <button className='font-bold text-[#a9a9a9] my-2' onClick={handleOpenMessage}>쪽지</button>
              <button className={'font-bold text-[#a9a9a9] my-2 '+ (mypageMenu === 'application' && 'text-black')} onClick={() => handleMypageMenu("application")}>신청 현황</button>
            </div>
          </div>
          <div className='w-4/5 p-8 rounded-xl bg-[#e9e9e9] ml-10'>
            
            {/* 내 정보 */}
            {mypageMenu == "userInfo" &&
            <div className='flex justify-center'>
              <table className='w-[70%]'>

                <caption className='mb-8 font-bold'>내 정보</caption>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] text-sm p-2 w-[25%]'>아이디(이메일)</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>abcd@naver.com</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2 text-sm'>이름</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>1234</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2 text-sm'>성별</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>남</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2 text-sm'>생년월일</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>12345678</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] p-2 text-sm'>전화번호</th>
                  <td className='border-2 border-[#c9c9c9] text-center'>010-1234-5678</td>
                </tr>
                
              </table>
            </div>
            }
            
            {/* 정보 수정 */}
            {mypageMenu == "updateInfo" && 
            <div className='flex justify-center '>
              <div className='w-[70%]'>
                <p className='mb-8 font-bold text-center'>정보 수정</p>
                <ul>
                  <li><label htmlFor="" className='text-sm'>아이디(이메일) <input type="text" className='w-full text-base rounded'/></label></li>
                  <li><label htmlFor="" className='text-sm'>비밀번호 <input type="text" className='w-full text-base rounded'/></label></li>
                  <li><label htmlFor="" className='text-sm'>이름 <input type="text" className='w-full text-base rounded'/></label></li>
                  <li><label htmlFor="" className='text-sm'>전화번호 <input type="text" className='w-full text-base rounded'/></label></li>
                </ul>
                <div className='flex justify-end'>
                  <button className='border-2 bg-[#c9c9c9] p-1 px-2 mt-2 rounded-[5px]'>수정</button>
                </div>
              </div>
            </div>
            }

            {/* 내 동아리 */}
            {mypageMenu == "myclub" && 
            <div className='flex justify-center'>
              <table className='w-[70%]'>
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
            <div className='flex justify-center'>
              <table className='w-[70%]'>
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
            }
            
            

          </div>
        </div>
      </div> 
      
      {/* 쪽지 modal box */}
      {modalDisplay == "Open" &&
        <MessageModal handleCloseMessage={handleCloseMessage} handleOpenMessage={handleOpenMessage} />
      }

    </>
  )
}