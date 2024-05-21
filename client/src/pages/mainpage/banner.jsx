import React from 'react';

export default function Banner() {
  return (
    <div className="flex items-center justify-between p-6 mx-20 my-8 mt-6 bg-gray-800 rounded-lg">
      <div className="flex items-center mx-auto space-x-4">
        <img src="/icons/joylink_blue_logo.png" alt="Joylink" className="h-16 mx-6 mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">조이링크는 다양한 분야의 모임을 지원합니다!</h2>
          <p className="text-gray-300">지금 바로 모임을 만들어 보세요!</p>
        </div>
      </div>
      <button className="px-4 py-2 text-white transition border border-white rounded hover:bg-white hover:text-gray-800">
        모임 생성하기
      </button>
    </div>
  );
}
