import './login.css'; // CSS 파일을 import 합니다.

export default function Login() {
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
                    <button id='join'>회원가입</button>
                </div>
            </div>
        </>
    );
}
