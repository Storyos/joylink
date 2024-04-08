import './login.css'; // CSS 파일을 import 합니다.
import { supabase } from '../../App';

export default function Login() {
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
            }
        })
        if (error) console.error(error);
        console.log("여기까지는 옴");
        console.log(data);
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
                    <button onClick={handleGoogleLogin}>구글로그인</button>
                    <button id='join'>회원가입</button>
                </div>
            </div>
        </>
    );
}
