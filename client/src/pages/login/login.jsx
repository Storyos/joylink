import React from "react";
import { Link } from "react-router-dom";
import { supabase } from '../../App';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [testData, setTestData] = useState(null);
    const [userpassword, setPassword] = useState(null);
    const [useremail, setEmail] = useState(null);
    let navigate = useNavigate();

    // 초대링크로 들어왔을 경우, 해당 이메일을 바로 ID에 넣음. 
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let email = useQuery().get("email");
    const updateUserData = async (email) => {
        const { data, error } = await supabase
            .from('users')
            .update({ user_email_verified: true })  // 예시: 'active' 상태를 true로 설정
            .eq('user_id', email);
        if (error) {
            console.error('Error updating user:', error);
        } else {
            console.log('User updated successfully:', data);
        }
    };
    // 컴포넌트 마운트 시 데이터 업데이트 실행
    useEffect(() => {
        if (email) {
            console.log(email);
            updateUserData(email);
        }
    }, [email]);

    // OAUTH로 로그인 했을때 추가정보가 기입되었는지 체크
    // 근데 이거는 메인페이지에서 진행해야될듯
    const checkAdditionalUserInfo = async(email) => {
        const {data, error} = await supabase.from('users').select(email).eq(email,email)
        if(!data){
            alert("추가 정보입력이 필요합니다.")
            // 여기서 추가 회원가입 입력페이지로 이동
        }
    }


    // 구글 로그인 처리
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        if (error) console.log("error :", error);
    };


    // 테스트 요청 처리
    const handleTest1 = async () => {
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
    }
    // 이메일 인증여부 체크
    const handleverifyemail = async () => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            // .eq('user_email_verified', true)
            .eq('user_id', useremail)
            .single()
        
            console.log(data);
        if (!data) {
            alert("이메일 인증이 아직 안되었습니다.");
        }else{
            await handlelogin();
        }
    }

    // 로그인 요청 처리
    const handlelogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: useremail,
            password: userpassword,
        })
        console.log("여기서 찍히는 값인가?", data);
        console.log('userpassword :>> ', userpassword);
        if (error) {
            console.log("에러발생");
            console.error(error);
        } else {
            console.log('로그인성공!');
            alert("로그인 성공~");
            
            // 로그인 성공시 이동하는 곳
            navigate('/');
            // 여기서 route 부탁드려요
            
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className='boxGroup'>
                <div className="p-4 bg-gray-100 rounded-lg loginBox">
                    <div className="mb-4 inputBox">
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded inputField focus:outline-none focus:border-blue-500" placeholder="아이디" value={email ? email : email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded inputField focus:outline-none focus:border-blue-500" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded loginButton hover:bg-blue-600" onClick={handleverifyemail}>로그인</button>
                </div>
                <div className="mt-4 text-center findBox">
                    <button id='findId' className="text-blue-500 hover:underline">아이디/비밀번호 찾기</button>
                    <h5 className="mt-2">계정이 없으신가요?</h5>
                    <div className="flex justify-center mt-4">
                        <button onClick={handleGoogleLogin} className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">구글로그인</button>
                        <button onClick={handleTest1} className="px-4 py-2 mr-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-600">TEST Button</button>
                        <button id='join' onClick={handleTest1} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">회원가입</button>
                    </div>
                </div>
            </div >
            <div>
                {(
                    <div>
                        <h3>현재 로그인된 Email: {email ? email : "Guest"}</h3>
                    </div>
                )}
            </div>
        </div >
    );
}
