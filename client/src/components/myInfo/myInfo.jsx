import React from "react";

// MyInfo 컴포넌트
export default function MyInfo() {
  return (
    <div>
      {/* 좌측에 배치되는 MyInfo 컴포넌트 */}
      <div>
        <div class="border border-indigo-600 ...">
          <h2>내 정보</h2>
          <button>Club Management</button>
        </div>
        <div class="border border-indigo-600 ...">
          <button>채팅</button>
        </div>
        <div class="border border-indigo-600 ...">
          <button>장부</button>
        </div>
        <div class="border border-indigo-600 ...">
          <h3>카테고리</h3>
          <div className="flex flex-col">
            <button>갤러리</button>
            <button>동아리 공지사항</button>
            <button>자유게시판</button>
            <button>질문게시판</button>
          </div>
        </div>
      </div>
    </div>
  );
}


