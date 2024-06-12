import React, { useState } from 'react';
import Bookkeeping from './Bookkeeping';
import Approval from './Approval';
import ManagaMember from './ManagaMember';

export default function ClubManagementPage() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='font-custom'>
      <div className="flex justify-center mt-28">
        <button 
          className="p-2 m-5 text-white bg-indigo-400 rounded-md" 
          onClick={() => handleTabClick('회원 관리')}
        >
          회원 관리
        </button>
        <button 
          className="p-2 m-5 text-white bg-indigo-400 rounded-md" 
          onClick={() => handleTabClick('장부 관리')}
        >
          장부 관리
        </button>
        <button 
          className="p-2 m-5 text-white bg-indigo-400 rounded-md" 
          onClick={() => handleTabClick('가입 승인')}
        >
          가입 승인
        </button>
      </div>

      <div className="flex justify-center m-5 border-indigo-800">
        {activeTab && (
          <div>
            {activeTab === '회원 관리' && <ManagaMember />}
            {activeTab === '장부 관리' && <Bookkeeping />}
            {activeTab === '가입 승인' && <Approval/>}
            {/* 다른 설정 화면 컴포넌트를 여기에 추가할 수 있습니다 */}
          </div>
        )}
      </div>
    </div>
  );
}
