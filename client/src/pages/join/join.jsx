import React from "react";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <input type="text" id="username" name="username" placeholder="아이디" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <input type="password" id="password" name="password" placeholder="비밀번호" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <input type="text" id="name" name="name" placeholder="이름" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <input type="tel" id="number" name="number" placeholder="전화번호" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">회원가입</button>
        </div>
      </form>
    </div>
  );
}
