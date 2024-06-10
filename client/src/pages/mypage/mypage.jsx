import { useEffect, useState, useTransition } from "react";
import { supabase } from "../../App";
import MessageModal from "../../components/messageModal";
import useUserStore from "../../zustand/useUserStore";
import { Link } from "react-router-dom";
export default function Mypage() {
  const userData = useUserStore((state) => state.user);
  const user_seq = userData.user_seq;
  // message modal창 열고 닫기
  const [modalDisplay, setModalDisplay] = useState("Close");
  const handleOpenMessage = () => {
    console.log("모달창 여는중..");
    setModalDisplay("Open");
  };

  const formatDate = (dateString) => {
    const options = { month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", options).replace(",", "");
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

  const VerticalLine = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="h-full border-r border-gray-400"></div>
      </div>
    );
  };

  useEffect(() => {
    async function getMyClub() {
      const { data, error } = await supabase
        .from("members")
        .select(
          `
      mem_date,
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

  return (
    <div className="font-custom">
      {/* 메인 영역 */}
      <div className="mt-48 mb-20">
        <div className="flex mt-32">
          <div className="w-64 mx-20 mt-4 text-2xl ml-36">
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
          <VerticalLine></VerticalLine>

          <div className="w-[1500px]">
            {/* 내 정보 */}
            {mypageMenu == "userInfo" && (
              <div className="flex-col ml-60 w-[820px] pt-10  border rounded-3xl bg-blue-50">
                <img
                  src="https://picsum.photos/200"
                  className="w-40 h-40 mb-8 rounded-full ml-16"
                />
                <h1 className="absolute top-[240px] right-[350px] text-2xl">
                  Life is what you make of it-!
                </h1>
                <div
                  className="absolute right-[350px]
                top-[350px]"
                >
                  <button className="w-[120px] h-[40px] px-2 border border-[#87C4FF] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white mr-10 rounded-xl text-xl">
                    {" "}
                    프로필 수정
                  </button>
                  <button className="w-[120px] h-[40px] px-2 border border-[#87C4FF] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white rounded-xl text-xl">
                    {" "}
                    내정보 수정
                  </button>
                </div>
                <div className="flex border-t w-[820px] h-[250px] bg-slate-50">
                  <div class="grid grid-cols-2 gap-x-36 ml-12 mt-12">
                    <div class="flex gap-x-8">
                      <h3 class="text-2xl font-semibold">아이디</h3>
                      <p class="text-gray-700 text-xl ml-4">
                        {userData.user_id}
                      </p>
                    </div>
                    <div class="flex gap-x-8">
                      <h3 class="text-2xl font-semibold">이름</h3>
                      <p class="text-gray-700 text-xl ml-8">
                        {userData.user_name}
                      </p>
                    </div>
                    <div class="flex gap-x-8">
                      <h3 class="text-2xl font-semibold">성별</h3>
                      <p class="text-gray-700 text-xl ml-8">
                        {userData.user_gender}
                      </p>
                    </div>
                    <div class="flex gap-x-8">
                      <h3 class="text-2xl font-semibold">생년월일</h3>
                      <p class="text-gray-700 text-xl">{userData.user_birth}</p>
                    </div>
                    <div class="flex gap-x-8">
                      <h3 class="text-2xl font-semibold">전화번호</h3>
                      <p class="text-gray-700 text-xl">{userData.user_pn}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* 내 정보 수정 */}
            {mypageMenu === "updateInfo" && (
              <div className="flex justify-center">
                <div className="w-[70%] p-5 border rounded-xl">
                  <p className="mb-8 text-2xl font-bold text-center">
                    정보 수정
                  </p>
                  <ul className="space-y-6 text-center">
                    <li className="flex items-center justify-between">
                      <label htmlFor="email" className="text-md text-[#a9a9a9]">
                        아이디(이메일)
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="p-1 px-2 text-black bg-gray-100 rounded text-xl ml-3 w-[70%]"
                        defaultValue={userData.user_id}
                      />
                    </li>
                    <li className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-md text-[#a9a9a9]"
                      >
                        비밀번호
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="p-1 px-2 text-black bg-gray-100 rounded text-xl ml-3 w-[70%]"
                        defaultValue={"비밀번호"}
                      />
                    </li>
                    <li className="flex items-center justify-between">
                      <label htmlFor="name" className="text-md text-[#a9a9a9]">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="p-1 px-2 text-black bg-gray-100 rounded text-xl ml-3 w-[70%]"
                        defaultValue={userData.user_name}
                      />
                    </li>
                    <li className="flex items-center justify-between">
                      <label htmlFor="phone" className="text-md text-[#a9a9a9]">
                        전화번호
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="p-1 px-2 text-black bg-gray-100 rounded text-xl ml-3 w-[70%]"
                        defaultValue={userData.user_pn}
                      />
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
              <div className="flex justify-center p-5">
                <table className="w-[70%]">
                  <caption className="mb-8 text-2xl font-bold">
                    내가 가입한 동아리
                  </caption>
                  <tr className="border border-[#c9c9c9]">
                    <th className="border border-[#c9c9c9] w-[50px] p-2"> </th>
                    <td className="border border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                      동아리 명
                    </td>
                    <td className="border border-[#c9c9c9] text-center text-sm">
                      직책
                    </td>
                    <td className="border border-[#c9c9c9] text-center text-sm">
                      가입 날짜
                    </td>
                  </tr>
                  {myClub.map((eachclub, index) => (
                    <tr className="border border-[#c9c9c9]" key={index}>
                      <th className="border border-[#c9c9c9] w-[50px]">
                        {index + 1}
                      </th>
                      <td className="border border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                        <Link
                          to={`/myClubPage?${eachclub.club_seq}`}
                          className=" hover:underline"
                        >
                          {eachclub.club.club_nm}
                        </Link>
                      </td>
                      <td className="border border-[#c9c9c9] text-center text-sm">
                        {eachclub.club_position}
                      </td>
                      <td className="border border-[#c9c9c9] text-center text-sm">
                        {formatDate(eachclub.mem_date)}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}

            {/* 신청 현황 */}
            {mypageMenu == "application" && (
              <div className="flex justify-center m-5">
                <table className="w-[70%]">
                  <caption className="mb-8 font-bold text-2xl">
                    신청 중인 동아리
                  </caption>
                  <tr className="border border-[#c9c9c9]">
                    <th className="border border-[#c9c9c9] w-[50px]"> </th>
                    <td className="border border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                      동아리 명
                    </td>
                    <td className="border border-[#c9c9c9] text-center text-sm">
                      상태
                    </td>
                  </tr>

                  {myjoinClubs.map((myjoinClub, index) => (
                    <tr className="border border-[#c9c9c9]">
                      <th className="border border-[#c9c9c9] w-[50px]">
                        {index + 1}
                      </th>
                      <td className="border border-[#c9c9c9] text-center min-w-[300px] p-2 text-sm">
                        {myjoinClub.club.club_nm}
                      </td>
                      <td className="border border-[#c9c9c9] text-center text-sm">
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
