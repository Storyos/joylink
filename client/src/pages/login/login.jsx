import './login.css';
import { supabase } from '../../App';
import { useState } from 'react';

export default function Login() {
    const [testData, setTestData] = useState(null);
    // 구글 로그인 처리
    const handleGoogleLogin = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {}
            });
            if (error) throw error;
            console.log("Google Login Data:", data);
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    // 테스트 요청 처리
    const handletest1 = async () => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'GET'
            });
            const data = await response.json(); // JSON 형태로 데이터 변환
            setTestData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 일반 로그인 처리 (아직 기능 구현 필요)
    const handleLogin = () => {
        console.log('Login button clicked');
        // 여기에 로그인 로직 추가
    };

    // 회원가입 처리 (아직 기능 구현 필요)
    const handleSignUp = () => {
        console.log('Sign Up button clicked');
        // 여기에 회원가입 로직 추가
    };

    return (
        <>
            <div className='boxGroup'>
                <div className="loginBox">
                    <div className="inputBox">
                        <input type="text" className="inputField" placeholder="아이디"></input>
                        <input type="password" className="inputField" placeholder="비밀번호"></input>
                    </div>
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                </div>
                <div className="findBox">
                    <button id='findId'>아이디/비밀번호 찾기</button>
                    <h5>계정이 없으신가요?</h5>
                    <button onClick={handleGoogleLogin}>구글로그인</button>
                    <button onClick={handletest1}>TEST Button</button>
                    <button id='join' onClick={handleSignUp}>회원가입</button>
                </div>
            </div>
            <div>
                {testData && (
                    <div>
                        <h3>받아온 데이터:</h3>
                        <p>Text: {testData[0].text}</p>
                    </div>
                )}
            </div>
        </>
    );
}
