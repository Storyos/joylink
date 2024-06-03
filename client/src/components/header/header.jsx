import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import useUserStore from "../../zustand/useUserStore"; // 상태관리를 위해
import Notifications from "../../pages/mainpage/notification";

export default function Header() {
  const { user, isLoggedIn, setUser, logout } = useUserStore();
  let navigate = useNavigate();

  // 로그인이 되어있는경우를 check
  useEffect(() => {
    const checkToken = async () => {
      const tokenDataString = localStorage.getItem(
        "sb-vtvkgtqvczyuteenfadw-auth-token"
      );
      if (tokenDataString) {
        const tokenData = JSON.parse(tokenDataString);
        const expiresAt = tokenData.expires_at;
        const expirationDate = new Date(expiresAt * 1000);
        const thirtyMinAgo = Date.now() - 30 * 60 * 1000;

        if (expirationDate.getTime() < thirtyMinAgo) {
          console.log("토큰 만료:", new Date(thirtyMinAgo).toString());
          handleLogout();
        } else {
          console.log("현재 시간:", new Date(Date.now()).toString());
          const {
            data: { session },
          } = await supabase.auth.getSession();
        }
      } else {
        console.log("토큰 데이터가 존재하지 않습니다.");
        logout();
      }
    };
    checkToken();
  }, [setUser]);

  async function handleLogout() { // 로그아웃 함수
    window.localStorage.removeItem("sb-vtvkgtqvczyuteenfadw-auth-token");
    const { logout } = useUserStore.getState();
    logout();
    alert("로그아웃 되었습니다.");
    navigate("/");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-white border-b border-gray-300 font-custom">
      <div className="flex flex-row items-center justify-between">
        <ul className="flex items-center my-2 md:ml-[100px]">
          <li className="mx-5">
            <Link to="/" className="my-2 mr-2 text-xl">
              JoyLink
            </Link>
          </li>
          <li className="w-[80px]">
            <Link to="/cbSearch">
              모임찾기
            </Link>
          </li>
          <li className="w-[80px]">
            <Link to="/notice" >
              공지사항
            </Link>
          </li>
          <li className="w-[80px]">
            <Link to="/vr">
              VR체험관
            </Link>
          </li>
        </ul>

        <div className="flex items-center md:mr-[100px]">
          {isLoggedIn ? (
            <>
             <div className="mr-8">
                <button
                  className="w-[90px] px-2 md:mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white"
                  onClick={handleLogout}
                >
                  <span>로그아웃</span>
                </button>
                <button className="w-[90px] px-2 md:mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-[#87C4FF] hover:bg-[#39A7FF] hover:border-[#39A7FF] text-white">
                  <Link to="/mypage">마이페이지</Link>
                </button>
             </div>
              <Notifications /> {/* 알림 아이콘 컴포넌트 추가 */}

            </>
          ) : (
            <>
              <button className="w-[90px] px-2 md:mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white">
                <Link to="/login">로그인</Link>
              </button>
              <button className="w-[90px] px-2 my-1 md:my-0 md:mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-[#87C4FF] hover:bg-[#39A7FF] hover:border-[#39A7FF] text-white">
                <Link to="/join">회원가입</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
