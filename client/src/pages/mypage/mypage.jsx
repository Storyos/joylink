import { useEffect, useState, useTransition } from "react";
import { supabase } from "../../App";
import MessageModal from "../../components/messageModal";
import useUserStore from "../../zustand/useUserStore";

export default function Mypage() {
  const user_seq = useUserStore((state) => state.user.user_seq);

  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Close");
  const handleOpenMessage = () => {
    console.log("모달창 여는중..");
    setModalDisplay("Open");
  };

  const handleCloseMessage = () => {
    setModalDisplay("Close");
  };

  // mypage 메뉴
  const [mypageMenu, setMypageMenu] = useState("userInfo"); // 디폴트는 내 정보 페이지
  const handleMypageMenu = (menu) => {
    setMypageMenu(`${menu}`);
  };

  // 내가 가입한 동아리 목록 가져오기
  const [myClub, setMyClub] = useState([]);

  // 가입 신청한 동아리 목록 가져오기
  const [myjoinClubs, setmyJoinClubs] = useState([]);

  useEffect(() => {
    async function getMyClub() {
      const { data, error } = await supabase
        .from("members")
        .select(
          `
      club:club_seq (club_nm, club_seq),
      user_seq,
      club_position
    `
        )
        .eq("user_seq", user_seq)
        .eq("mem_st", "가입중");

      console.log("club데이터", data);
      if (error) {
        console.log("club 데이터 가져오는데 에러발생", error);
      }
      setMyClub(data);
    }

    async function getMyJoinClubs() {
      const { data, error } = await supabase
        .from("joinclubs")
        .select(
          `
      club:club_seq (club_nm,club_seq),
      jc_Rst`
        )
        .eq("user_seq", user_seq);
      console.log("내가 신청했던 club 데이터", data);
      if (error) {
        console.log("내가 신청한 club 데이터 가져오는데 에러발생", error);
      }
      setmyJoinClubs(data);
    }
    getMyJoinClubs();
    getMyClub();
  }, []);

  const WaveHR = () => (
    <div className="w-full overflow-hidden">
      <svg
        className="w-full h-12"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 Q300,60 600,30 T1200,30"
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );

  return (
    <div>
      {/* 메인 영역 */}
      <div className="mt-48 mb-20">
        <WaveHR></WaveHR> {/*가로 물결 hr를 넣는 컴포넌트*/}
        <div className="flex mt-32">
          <div className="w-64 text-2xl mx-20 mt-4 ml-36">
            <div className="flex flex-col space-y-4">
              <button
                className="text-left btn"
                onClick={() => handleMypageMenu("userInfo")}
              >
                내 정보
              </button>
              <button
                className="text-left btn"
                onClick={() => handleMypageMenu("updateInfo")}
              >
                내 정보수정
              </button>
              <button
                className="text-left btn"
                onClick={() => handleMypageMenu("myclub")}
              >
                내 동아리
              </button>
              <button className="text-left btn" onClick={handleOpenMessage}>
                쪽지
              </button>
              <button
                className="text-left btn"
                onClick={() => handleMypageMenu("application")}
              >
                신청 현황
              </button>
            </div>
          </div>

          <div className="w-[1000px]">
            {/* 내 정보 */}
            {mypageMenu == "userInfo" && (
              <div class="bg-blue-100 border rounded-xl p-8 w-96 mx-auto">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://picsum.photos/200"
                    className="rounded-full w-24 h-24 mb-8"
                  />
                </div>
                <h2 class="text-2xl font-bold mb-8">회원 정보</h2>
                <div class="grid grid-cols-1 gap-4">
                  <div class="grid grid-cols-2 gap-8">
                    <h3 class="text-lg font-semibold mb-2">아이디</h3>
                    <p class="text-gray-700">abcd@naver.com</p>
                  </div>
                  <div class="grid grid-cols-2 gap-8">
                    <h3 class="text-lg font-semibold mb-2">이름</h3>
                    <p class="text-gray-700">박기재</p>
                  </div>
                  <div class="grid grid-cols-2 gap-8">
                    <h3 class="text-lg font-semibold mb-2">성별</h3>
                    <p class="text-gray-700">남자</p>
                  </div>
                  <div class="grid grid-cols-2 gap-8">
                    <h3 class="text-lg font-semibold mb-2">생년월일</h3>
                    <p class="text-gray-700">20000901</p>
                  </div>
                  <div class="grid grid-cols-2 gap-8">
                    <h3 class="text-lg font-semibold mb-2">전화번호</h3>
                    <p class="text-gray-700">1234-1234</p>
                  </div>
                </div>
              </div>
            )}
            {/* 정보 수정 */}
            {mypageMenu == "updateInfo" && (
              <div className="flex justify-center ">
                <div className="w-[70%]">
                  <p className="mb-8 font-bold text-center">정보 수정</p>
                  <ul>
                    <li>
                      <label htmlFor="" className="text-sm text-[#a9a9a9]">
                        아이디(이메일){" "}
                        <input
                          type="text"
                          className="w-full p-1 px-2 text-black bg-gray-100 rounded"
                          defaultValue={"아이디"}
                        />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="" className="text-sm text-[#a9a9a9]">
                        비밀번호{" "}
                        <input
                          type="text"
                          className="w-full p-1 px-2 text-black bg-gray-100 rounded"
                          defaultValue={"비밀번호"}
                        />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="" className="text-sm text-[#a9a9a9]">
                        이름{" "}
                        <input
                          type="text"
                          className="w-full p-1 px-2 text-black bg-gray-100 rounded"
                          defaultValue={"이름"}
                        />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="" className="text-sm text-[#a9a9a9]">
                        전화번호{" "}
                        <input
                          type="text"
                          className="w-full p-1 px-2 text-black bg-gray-100 rounded"
                          defaultValue={"전화번호"}
                        />
                      </label>
                    </li>
                  </ul>
                  <div className="flex justify-end">
                    <button className="bg-gray-100 p-1 px-2 mt-2 rounded-[5px] hover:bg-[#e9e9e9]">
                      수정
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 내 동아리 */}
            {mypageMenu == "myclub" && (
              <div className="flex justify-center">
                <table className="w-[70%]">
                  <caption className="mb-8 font-bold">
                    내가 가입한 동아리
                  </caption>
                  <tr className="border-2 border-[#c9c9c9]">
                    <th className="border-2 border-[#c9c9c9] w-[50px] p-2">
                      {" "}
                    </th>
                    <td className="border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                      동아리 명
                    </td>
                    <td className="border-2 border-[#c9c9c9] text-center text-sm">
                      가입 날짜
                    </td>
                  </tr>
                  {myClub.map((eachclub, index) => (
                    <tr className="border-2 border-[#c9c9c9]">
                      <th className="border-2 border-[#c9c9c9] w-[50px]">
                        {index + 1}
                      </th>
                      <td className="border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                        {eachclub.club.club_nm}
                      </td>
                      <td className="border-2 border-[#c9c9c9] text-center text-sm">
                        {eachclub.club_position}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}

            {/* 신청 현황 */}
            {mypageMenu == "application" && (
              <div className="flex justify-center">
                <table className="w-[70%]">
                  <caption className="mb-8 font-bold">신청 중인 동아리</caption>
                  <tr className="border-2 border-[#c9c9c9]">
                    <th className="border-2 border-[#c9c9c9] w-[50px]"> </th>
                    <td className="border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                      동아리 명
                    </td>
                    <td className="border-2 border-[#c9c9c9] text-center text-sm">
                      상태
                    </td>
                  </tr>

                  {myjoinClubs.map((myjoinClub, index) => (
                    <tr className="border-2 border-[#c9c9c9]">
                      <th className="border-2 border-[#c9c9c9] w-[50px]">
                        {index + 1}
                      </th>
                      <td className="border-2 border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                        {myjoinClub.club.club_nm}
                      </td>
                      <td className="border-2 border-[#c9c9c9] text-center text-sm">
                        {myjoinClub.jc_Rst}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 쪽지 modal box */}
      {modalDisplay == "Open" && (
        <MessageModal
          handleCloseMessage={handleCloseMessage}
          handleOpenMessage={handleOpenMessage}
        />
      )}
    </div>
  );
}
