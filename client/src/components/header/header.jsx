import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../App";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인이 되어있는경우를 check
    useEffect( () => {
        // 페이지 로드 시 로그인 세션 확인
        async function getsession() {
        const session = await supabase.auth.getUser(); 
        console.log("session값임 ",session.data.user);
        setIsLoggedIn(session?.data.user != null);  // access_token의 존재 여부로 로그인 상태 결정
      }
      getsession();
    }, []);

  return (
    <header className="mb-10 bg-indigo-400">
      <div className="p-7">
          <ul className="flex justify-center text-3xl font-medium">
            <li><Link to="/" className="mx-5 text-white hover:text-indigo-800">JoyLink</Link></li>
            <li><Link to="/cbSearch" className="mx-5 text-white hover:text-indigo-800">모임찾기</Link></li>
            <li><Link to="/notice" className="mx-5 text-white hover:text-indigo-800">공지사항</Link></li>
            <li><Link to="/vr" className="mx-5 text-white hover:text-indigo-800">VR체험관</Link></li>
          </ul>

        <div className="flex justify-center pt-20 font-medium">
          {
            isLoggedIn?
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


