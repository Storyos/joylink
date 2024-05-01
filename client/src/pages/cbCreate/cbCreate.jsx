import React, { useState } from 'react';

// Modal 컴포넌트
function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="p-5 bg-white rounded">
        <h1>알림</h1>
        <p>{message}</p>
        <button onClick={onClose} className="p-2 mt-2 text-white bg-blue-500 rounded">닫기</button>
      </div>
    </div>
  );
}

function CbCreate() {
  const [showModal, setShowModal] = useState(false);

  // 모달을 표시하는 함수
  const handleCreate = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen py-10 bg-white">
      <div className="flex flex-col items-start justify-between w-full max-w-4xl p-6 my-4 bg-gray-300 rounded-lg">
        <div className="mb-6 text-2xl text-black">동아리 만들기</div>
        <div className="flex flex-col w-full gap-4 p-4 bg-gray-200 rounded">
          <div className="flex items-center gap-3">
            <label className="text-lg text-gray-700 w-1/4 min-w-[100px]">동아리명</label>
            <input 
              className="flex-grow p-2 bg-white border border-gray-300 rounded" 
              placeholder="동아리명 입력" 
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-lg text-gray-700 w-1/4 min-w-[100px]">동아리 분류</label>
            <input 
              className="flex-grow p-2 bg-white border border-gray-300 rounded" 
              placeholder="동아리 분류 입력" 
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-lg text-gray-700 w-1/4 min-w-[100px]">활동 지역</label>
            <input 
              className="flex-grow p-2 bg-white border border-gray-300 rounded" 
              placeholder="활동 지역 입력" 
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-lg text-gray-700 w-1/4 min-w-[100px]">동아리 소개</label>
            <textarea 
              className="flex-grow p-2 bg-white border border-gray-300 rounded" 
              placeholder="동아리에 대한 설명" 
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button className="flex items-center justify-center h-16 text-2xl text-black bg-gray-300 rounded cursor-pointer w-44">
          취소
        </button>
        <button 
          onClick={handleCreate}
          className="flex items-center justify-center h-16 text-2xl text-black bg-gray-300 rounded cursor-pointer w-44"
        >
          생성하기
        </button>
      </div>
      {showModal && <Modal message="동아리가 성공적으로 생성되었습니다." onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default CbCreate;
