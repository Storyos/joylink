import { useEffect, useState } from "react"
import { supabase } from "../../App";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/useUserStore";

export default function CheckUserInfo() {
    const navigate = useNavigate();

    // OAUTH로 로그인 했을때 추가정보가 기입되었는지 체크
    const checkAdditionalUserInfo = async () => {
        
        const email = (await supabase.auth.getUser()).data.user.email;
        const { data, error } = await supabase.from('users').select('*').eq('user_id', email).single();
        if (error) {
            if (error.code == 'PGRST116') {
                console.log(data);
                alert("추가 정보입력이 필요합니다.");
                navigate("/getInfo");
            } else {
                console.error("다른에러 발생", error);
            }
        } else {
                await fetchUserData(email);
        }
    }

    const fetchUserData = async (email) => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('user_id', email)
            .single()
            
        if(error){
            console.error("fetch user에서 발생한 에러 ",error);
        }else{
            useUserStore.getState().setUser(data); // zustand에 로그인후 컬럼정보 저장
            // alert("로그인 되었습니다");
            const userState = useUserStore.getState(); // 상태를 가져옵니다
            console.log("상태저장 값:",userState.user); // 테스트용으로 
            navigate('/');
        }
        
    }

    // Page가 처음 Load될때 Token값과 Supabase를 비교하여 Supabase에 해당 데이터가 없을경우 추가 회원정보 입력 페이지로 넘김
    useEffect(() => {
            checkAdditionalUserInfo();
    }, []);

    return null;
}
