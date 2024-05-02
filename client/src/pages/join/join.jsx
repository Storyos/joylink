import React from "react";
import { Link } from "react-router-dom";
import { supabase } from '../../App';
import {
  useState
} from "react";
export default function Join() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');



  // 일반 회원가입
  async function signUp(event) {
    event.preventDefault(); // 폼 제출을 방지

    const userdata = {
      email : email,
      password : password,
      user_name: name,
      user_pn: phoneNumber,
      user_birth: birth,
      user_gender: gender
    };
    // const userdata = req.body;
    console.log('userdata :>> ', userdata);
    // 회원가입 (AUTH에서 진행됨)
    const { data, error } = await supabase.auth.signUp(
      {
        email: userdata.email,
        password: userdata.password,
      }
    )
    if (error) console.error(error);
    await insertUser(userdata);
    // 이메일이 전송되었습니다. 
    // res.status(201).json({ success: true, message: '회원 가입 중' });
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
      })
    alert("이메일이 전송되었습니다.");
  }


  return (

    <div className="flex items-center justify-center h-screen">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">

        <div className="mb-4">
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" placeholder="이메일" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="비밀번호" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="이름" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-6">
          <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" id="number" name="number" placeholder="전화번호" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <input onChange={(e) => setBirth(e.target.value)} type="date" id="bitrh" name="birth" placeholder="생일" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
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


