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
      email: email,
      password: password,
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
    console.log(userdata.email);
    if (error) console.error(error);
    else {
      console.log(data);
      alert("이메일이 전송되었습니다.");
      await insertUser(userdata);
    }
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
  }


  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full">
        <img src="/assets/main7.jpg" alt="Image" className="object-cover w-full h-full" />
      </div>
      <div className="flex items-center justify-center w-1/2 bg-white">
        <div className="w-full max-w-md p-6">
          <div className="mb-8 text-center">
            <img  src="/icons/joylink_blue_logo.png" alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">Sign Up</h2>
          </div>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div className="mb-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="username"
                name="username"
                placeholder="이메일"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="이름"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                id="number"
                name="number"
                placeholder="전화번호"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setBirth(e.target.value)}
                type="date"
                id="birth"
                name="birth"
                placeholder="생일"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setGender(e.target.value)}
                type="text"
                id="gender"
                name="gender"
                placeholder="성별"
                required
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={signUp}
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}


