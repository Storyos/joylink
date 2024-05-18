import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../App";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 페이지 로드 시 로그인 세션 확인
    async function getsession() {
      const session = await supabase.auth.getUser(); 
      console.log("session값임 ",session.data.user);
      setIsLoggedIn(session?.data.user != null);  // access_token의 존재 여부로 로그인 상태 결정
    }
    getsession();
  }, []);

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
          <button className="px-2 mx-2 border-2 border-[#87C4FF] rounded-[5px] bg-white hover:bg-[#87C4FF] hover:border-[#87C4FF] text-[#39A7FF] hover:text-white"><Link to="/login">로그아웃</Link></button>
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
    </header>
  );
}


