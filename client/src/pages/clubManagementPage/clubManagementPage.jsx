import React, { useState } from 'react';

export default function ClubManagementPage() {
  // 각 버튼에 대한 설정 화면을 관리할 상태
  const [activeTab, setActiveTab] = useState(null);

  // 각 버튼 클릭 시 해당하는 설정 화면을 보여주는 함수
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button 
          className="bg-indigo-400 m-5 p-2 rounded-md text-white" 
          onClick={() => handleTabClick('회원 관리')}
        >
          회원 관리
        </button>
        <button 
          className="bg-indigo-400 m-5 p-2 rounded-md text-white" 
          onClick={() => handleTabClick('페이지 관리')}
        >
          페이지 관리
        </button>
        <button 
          className="bg-indigo-400 m-5 p-2 rounded-md text-white" 
          onClick={() => handleTabClick('장부 관리')}
        >
          장부 관리
        </button>
        <button 
          className="bg-indigo-400 m-5 p-2 rounded-md text-white" 
          onClick={() => handleTabClick('가입 방식')}
        >
          가입 방식
        </button>
      </div>

      <div className="flex justify-center border m-5">
        {/* 각 버튼에 대한 설정 화면을 보여줌 */}
        {activeTab && (
          <div>
            <h1>{activeTab}입니다</h1>
            {/* 이곳에 각 설정 화면을 표시하는 컴포넌트를 넣어주세요 */}
          </div>
        )}
      </div>
    </div>
  );
}


