import React from "react";
import { Link } from "react-router-dom";
import { supabase } from '../../App';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/useUserStore"; // zustand에 로그인후 컬럼정보 저장

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


    // 구글 로그인 처리
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: 'http://localhost:3000/checkUserInfo'
            }
        });
        if (error) console.log("구글 OAUTH에서 발생한에러 :", error);
    };
    const handleKakaoLogin = async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider:"kakao",
            options: {
                redirectTo: 'http://localhost:3000/checkUserInfo'
            }
        });
        if(error) console.log("KAKAO OAUTH 에러",error);
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
        } else {
            await handlelogin();
        }
    }

    const fetchUserData = async () => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('user_id', useremail)
            .single()

        if (error) {
            console.error("fetch user에서 발생한 에러 ", error);

        } else {
            useUserStore.getState().setUser(data); // zustand에 로그인후 컬럼정보 저장
            alert("로그인 성공~");
            const userState = useUserStore.getState(); // 상태를 가져옵니다
            console.log("상태저장 값:", userState.user); // 테스트용으로 
            navigate('/');
        }

    }
    // 로그인 요청 처리
    const handlelogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: useremail,
            password: userpassword,
        })
        console.log("여기서 찍히는 값인가?", data); // 테스트
        if (error) {
            console.log("에러발생");
            console.error(error);
        } else {
            await fetchUserData();
        }
    }
    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full">
                <img src="/assets/main7.jpg" alt="Image" className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center justify-center w-1/2 bg-white">
                <div className="w-full max-w-md p-6">
                    <div className="mb-8 text-center">
                        <img src="/icons/joylink_blue_logo.png" alt="Logo" className="w-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-700">Login</h2>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="E-mail Address"
                            value={email ? email : useremail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mt-2 text-right">
                            <a href="#" className="text-sm text-blue-500 hover:underline">비밀번호를 잊어버리셨나요?</a>
                        </div>
                    </div>
                    <button onClick={handleverifyemail} className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
                        로그인
                    </button>
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full px-4 py-2 mt-1 font-bold text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none">
                        <img src="/icons/google_logo.png" alt="Google logo" className="w-6 h-6 mr-3"></img>
                        Google로 로그인하기
                    </button>
                    <button onClick={handleKakaoLogin} className="flex items-center justify-center w-full px-4 py-2 mt-1 font-bold text-gray-600 bg-yellow-400 border border-gray-300 rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none">
                        <img src="/icons/kakao_login_logo.png" alt="Google logo" className="w-6 h-6 mr-3"></img>
                        KAKAO로 로그인하기
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">계정이 없으신가요? <Link to="/signup" className="text-blue-500 hover:underline">회원가입</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

