import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import useUserStore from "../../zustand/useUserStore";

export default function Header() {
  
  const { user, isLoggedIn, setUser, logout } = useUserStore();
  let navigate= useNavigate();
  // 로그인이 되어있는경우를 check
  useEffect(() => {
    const checkToken = async () => {
      const tokenDataString = localStorage.getItem('sb-vtvkgtqvczyuteenfadw-auth-token');
      if (tokenDataString) {
        const tokenData = JSON.parse(tokenDataString);
        const expiresAt = tokenData.expires_at;
        const expirationDate = new Date(expiresAt * 1000);
        const thirtyMinAgo = Date.now() - (30 * 60 * 1000);

        if (expirationDate.getTime() < thirtyMinAgo) {
          console.log('토큰 만료:', new Date(thirtyMinAgo).toString());
          handleLogout();
        } else {
          console.log('현재 시간:', new Date(Date.now()).toString());
          const { data: { session } } = await supabase.auth.getSession();
        }
      } else {
        console.log('토큰 데이터가 존재하지 않습니다.');
        setUser(null);
      }
    };
    checkToken();
  }, [setUser]);
  
    
  async function handleLogout(){
    window.localStorage.removeItem('sb-vtvkgtqvczyuteenfadw-auth-token');
    const {logout} = useUserStore.getState();
    logout();
    alert('로그아웃 되었습니다.');
    navigate('/');
  }
  
  return (
    <header className="p-6">
      <div className="flex items-center justify-between">
          <ul className="flex items-center ml-[200px]">
            <li><Link to="/" className="mx-5 text-xl ">JoyLink</Link></li>
            <li><Link to="/cbSearch" className="mx-5 ">모임찾기</Link></li>
            <li><Link to="/notice" className="mx-5 ">공지사항</Link></li>
            <li><Link to="/vr" className="mx-5 ">VR체험관</Link></li>
          </ul>

        <div className="mr-[200px]">
          {
            isLoggedIn?
          (<>
          <button className="px-2 mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white" onClick={handleLogout}>로그아웃</button>
          <button className="px-2 border-2 border-[#87C4FF] rounded-[5px] bg-[#87C4FF] hover:bg-[#39A7FF] hover:border-[#39A7FF] text-white"><Link to="/mypage">마이페이지</Link></button>
          </>)
          :
          (<>
          <button className="px-2 mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white"><Link to="/login">로그인</Link></button>
          <button className="px-2 border-2 border-[#87C4FF] rounded-[5px] bg-[#87C4FF] hover:bg-[#39A7FF] hover:border-[#39A7FF] text-white"><Link to="/join">회원가입</Link></button>
          </>)
          }
          
        </div>
      </div>
      <style>
        {`
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">
          header {
            font-family: "Black Han Sans", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>
    </header>

  );
}


