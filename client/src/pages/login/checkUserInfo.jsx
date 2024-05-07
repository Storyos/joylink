import { useEffect } from "react"
import { supabase } from "../../App";
import { useNavigate } from "react-router-dom";
export default function CheckUserInfo(){
    
    const navigate = useNavigate();
    // OAUTH로 로그인 했을때 추가정보가 기입되었는지 체크
    const checkAdditionalUserInfo = async() => {
        const session = await supabase.auth.getUser(); 
        const email = session.data.user.email
        console.log("현재 세션의 email값: ",email);
        const {data, error} = await supabase.from('users').select('*').eq('user_id',email).single()
        if(error){
            console.error("OAUTH에서 추가정보 기입여부 확인 Error발생");
        }
        if(!data){
            alert("추가 정보입력이 필요합니다.");
            navigate("/getInfo");
            // 여기서 추가 회원가입 입력페이지로 이동
        }else{
            alert("로그인성공");
            navigate("/");
        }
    }

    // Page가 처음 Load될때 Token값과 Supabase를 비교하여 Supabase에 해당 데이터가 없을경우 추가 회원정보 입력 페이지로 넘김
    // useEffect에서는 await이 불가능하기때문에 따로 함수를 만들어서 함수를 넣는방식으로 사용
    useEffect(()=>{
        checkAdditionalUserInfo();
    },[]);
    return null
}

