import './login.css';
import { supabase } from '../../App';
import { useState } from 'react';

export default function Login() {
    const [testData, setTestData] = useState(null);
    // 구글 로그인 처리
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        if (error) console.log("error :", error);
    };
    // 테스트 요청 처리
    const handletest1 = async () => {
        const data = await supabase.auth.getUser();
        setTestData(data.data.user.email);
        console.log(data.data.user.email);
    }
    const handlekakaoLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
        });
    }
    
    return (
        <>
            <div className='boxGroup'>
                <div className="loginBox">
                    <div className="inputBox">
                        <input type="text" className="inputField" placeholder="아이디"></input>
                        <input type="password" className="inputField" placeholder="비밀번호"></input>
                    </div>
                    <button className="loginButton">Login</button>
                </div>
                <div className="findBox">
                    <button id='findId'>아이디/비밀번호 찾기</button>
                    <h5>계정이 없으신가요?</h5>
                    <button onClick={(handleGoogleLogin, handletest1)}>구글로그인</button>
                    <button onClick={(handlekakaoLogin,handletest1)}>카카오 로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
            <div>
                {(
                    <div>
                        <h3>현재 로그인된 Email:{testData ? testData : "Guest"}</h3>
                    </div>
                )}
            </div>
        </>
    );
}
