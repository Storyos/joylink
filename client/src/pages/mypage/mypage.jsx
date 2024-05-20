
import { useState, useTransition } from 'react'
import { supabase } from '../../App';
import MessageModal from '../../components/messageModal';
import { Link } from 'react-router-dom';
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
    <div className='bg-gray-100'>

      {/* 메인 영역 */}
      <div className='py-24 mx-auto'>
        <div className='flex justify-center'>
          <div className='w-[120px] rounded-[10px] bg-white shadow '>
            <div className='flex flex-col items-center min-h-[500px] py-4'>
              <button className={'font-bold text-[#a9a9a9] my-2 text-sm '+ (mypageMenu === 'userInfo' && 'text-black text-lg')} onClick={() => handleMypageMenu("userInfo")}>내 정보</button>
              <button className={'font-bold text-[#a9a9a9] my-2 text-sm '+ (mypageMenu === 'updateInfo' && 'text-black')} onClick={() => handleMypageMenu("updateInfo")}>정보 수정</button>
              <button className={'font-bold text-[#a9a9a9] my-2 text-sm '+ (mypageMenu === 'myclub' && 'text-black')} onClick={() => handleMypageMenu("myclub")}>내 동아리</button>
              <button className='font-bold text-[#a9a9a9] my-2 text-sm ' onClick={handleOpenMessage}>쪽지</button>
              <button className={'font-bold text-[#a9a9a9] my-2 text-sm '+ (mypageMenu === 'application' && 'text-black')} onClick={() => handleMypageMenu("application")}>신청 현황</button>
            </div>
          </div>
          <div className='w-[800px] p-8 ml-10 bg-white shadow rounded-xl'>
            
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
                  <li><label htmlFor="" className='text-sm text-[#a9a9a9]'>아이디(이메일) <input type="text" className='w-full p-1 px-2 text-black bg-gray-100 rounded' defaultValue={"아이디"}/></label></li>
                  <li><label htmlFor="" className='text-sm text-[#a9a9a9]'>비밀번호 <input type="text" className='w-full p-1 px-2 text-black bg-gray-100 rounded' defaultValue={"비밀번호"}/></label></li>
                  <li><label htmlFor="" className='text-sm text-[#a9a9a9]'>이름 <input type="text" className='w-full p-1 px-2 text-black bg-gray-100 rounded' defaultValue={"이름"}/></label></li>
                  <li><label htmlFor="" className='text-sm text-[#a9a9a9]'>전화번호 <input type="text" className='w-full p-1 px-2 text-black bg-gray-100 rounded' defaultValue={"전화번호"}/></label></li>
                </ul>
                <div className='flex justify-end'>
                  <button className='bg-gray-100 p-1 px-2 mt-2 rounded-[5px] hover:bg-[#e9e9e9]'>수정</button>
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
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm'>동아리 명</td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>가입 날짜</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>1</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] text-sm'><Link to={"/myClubPage"}>동아리1</Link></td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>2024/05/07</td>

                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>2</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] text-sm'><Link to={"/myClubPage"}>동아리2</Link></td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>2024/05/08</td>

                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px] p-2'>3</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] text-sm'><Link to={"/myClubPage"}>동아리3</Link></td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>2024/05/09</td>

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
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm'>동아리 명</td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>신청 현황</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>1</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm'>동아리1</td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>신청 중</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>2</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm'>동아리2</td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>가입 완료</td>
                </tr>
                <tr className='border-2 border-[#c9c9c9]'>
                  <th className='border-2 border-[#c9c9c9] w-[50px]'>3</th>
                  <td className='border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm'>동아리3</td>
                  <td className='border-2 border-[#c9c9c9] text-center text-sm'>신청 취소</td>
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

    </div>
  )
}