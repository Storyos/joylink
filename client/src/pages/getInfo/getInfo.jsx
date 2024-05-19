import React from "react";
import { Link } from "react-router-dom";
import { supabase } from '../../App';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function GetInfo() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  let navigate = useNavigate();
  // 회원가입 추가 정보받기
  async function signUp(event) {
    event.preventDefault(); // 폼 제출을 방지

    const userdata = {
      email: email,
      user_name: name,
      user_pn: phoneNumber,
      user_birth: birth,
      user_gender: gender
    };
    
    console.log('userdata :>> ', userdata);
    // 회원가입 (AUTH에서 진행됨)
    const { data, error } = await supabase.auth.signUp({
      email: userdata.email
    });

    if (error) console.error(error);
    await insertUser(userdata);
    // 이메일이 전송되었습니다.
  }
  
  const insertUser = async (userdata) => {
    await supabase
      .from('users')
      .insert({
        user_id: userdata.email,
        user_name: userdata.user_name,
        user_pn: userdata.user_pn,
        user_birth: userdata.user_birth,
        user_gender: userdata.user_gender,
        user_email_verified: true,
      });
      alert("정보가 입력되었습니다.");
      navigate('/');
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" placeholder="이메일" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="이름" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-6">
          <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" id="number" name="number" placeholder="전화번호" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setBirth(e.target.value)} type="date" id="birth" name="birth" placeholder="생일" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setGender(e.target.value)} type="text" id="gender" name="gender" placeholder="성별" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="flex items-center justify-center">
          <button onClick={signUp} type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">회원가입</button>
        </div>
      </form>
    </div>
  );
}
