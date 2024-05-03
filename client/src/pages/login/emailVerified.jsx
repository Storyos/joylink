import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { supabase } from "../../App";


export default function EmailVerified() {
    return (
        <>
        <div>이메일 인증이 완료되었습니다!</div>
        <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded mr- 2 hover:bg-blue-700"><Link to="/login">로그인</Link></button>
        <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/">홈으로</Link></button> 
        </>   
)
}