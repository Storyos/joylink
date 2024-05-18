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
    <header className="mb-10">
      <div className="p-7">
          <ul className="flex text-lg font-medium justify-center">
            <li><Link to="/" className="hover:text-indigo-800 mx-5">JoyLink</Link></li>
            <li><Link to="/cbSearch" className="hover:text-indigo-800 mx-5">모임찾기</Link></li>
            <li><Link to="/notice" className="hover:text-indigo-800 mx-5">공지사항</Link></li>
            {/* VR체험관 링크에 target="_blank" 추가, 새 창에 vr페이지를 띄울 수 있습니다 */}
            <li><a href="/vr" className="hover:text-indigo-800 mx-5" target="_blank">VR체험관</a></li>
          </ul>

        <div className="flex justify-center font-medium pt-20">
          {
            isLoggedIn ?
          (<button className="mr-2 text-white rounded hover:text-indigo-800"><Link to="/login">로그아웃</Link></button>)
          :
          (<button className="mr-2 text-white hover:text-indigo-800"><Link to="/login">로그인</Link></button>)
          }
          <button className="px-4 py-2 text-white hover:text-indigo-800"><Link to="/join">회원가입</Link></button>
          <button className="px-4 py-2 text-white hover:text-indigo-800"><Link to="/getInfo">회원가입 추가정보 받기</Link></button>
        </div>
      </div>
    </header>
  );
}


