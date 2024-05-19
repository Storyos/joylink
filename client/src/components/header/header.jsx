import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import useUserStore from "../../zustand/useUserStore";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate= useNavigate();
  
  // 로그인이 되어있는경우를 check

  useEffect(() => {
    const checkTokenExpiration = () => {
      const tokenDataString = localStorage.getItem('sb-vtvkgtqvczyuteenfadw-auth-token');
      if (tokenDataString) {
        // JSON 문자열을 객체로 변환
        const tokenData = JSON.parse(tokenDataString);
    
        // expires_at 값 추출
        const expiresAt = tokenData.expires_at;
    
        // UNIX 타임스탬프를 사람이 읽을 수 있는 형식으로 변환
        const expirationDate = new Date(expiresAt * 1000);
        const thirtyMinAgo = Date.now() - (30 * 60 * 1000);

        if (expirationDate.getTime() < thirtyMinAgo) {
          console.log('토큰 만료:', new Date(thirtyMinAgo).toString());
          setIsLoggedIn(false);
        } else {
          console.log('현재 시간:', new Date(Date.now()).toString());
          setIsLoggedIn(true);
          getsession();
        }
      } else {
        console.log('토큰 데이터가 존재하지 않습니다.');
      }
    };

    // 페이지 로드 시 로그인 세션 확인
    const getsession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkTokenExpiration();
  }, []);
  
  async function handleLogout(){
    window.localStorage.removeItem('sb-vtvkgtqvczyuteenfadw-auth-token');
    const {logout} = useUserStore.getState();
    logout();
    setIsLoggedIn(false);
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
    </header>
  );
}


