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
      <div className="flex justify-evenly ... m-10 ">
        <button 
          className="bg-sky-500/75 ..." 
          onClick={() => handleTabClick('회원 관리')}
        >
          회원 관리
        </button>
        <button 
          className="bg-sky-500/75 ..." 
          onClick={() => handleTabClick('페이지 관리')}
        >
          페이지 관리
        </button>
        <button 
          className="bg-sky-500/75 ..." 
          onClick={() => handleTabClick('장부 관리')}
        >
          장부 관리
        </button>
        <button 
          className="bg-sky-500/75 ..." 
          onClick={() => handleTabClick('가입 방식')}
        >
          가입 방식
        </button>
      </div>

      <div className="flex justify-center ... m-10">
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
