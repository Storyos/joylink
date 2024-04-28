import React from "react";

// 헤더 컴포넌트
function Header() {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 mb-8">
      <h1 className="text-2xl font-bold">헤더</h1>
    </div>
  );
}
// MyInfo 컴포넌트
export default function MyInfo() {
  return (
    <div className="flex flex-col lg:flex-row  border-2 w-2/5">
      <div className="lg:w-1/4">
        {/* 좌측에 배치되는 MyInfo 컴포넌트 */}
        <div className="my-8">
          <h2 className="text-2xl font-bold">내 정보</h2>
        </div>
        <div className="my-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Club Management
          </button>
        </div>
        <div className="my-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            채팅
          </button>
        </div>
        <div className="my-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            장부
          </button>
        </div>
        <div className="my-8">
          <h3 className="text-lg font-semibold">카테고리</h3>
        </div>
      </div>
    </div>
  );
}

