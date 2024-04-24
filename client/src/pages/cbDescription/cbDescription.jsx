import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function CbIntro() {
  return (
    <>
      <Header />
      <div className="w-screen bg-white">
        <div className="mx-auto mt-36 mb-14 p-7 bg-gray-300 rounded-lg w-[calc(100%-56px)] h-[776px] flex flex-col justify-between items-end">
          <div className="flex flex-col w-full gap-6">
            <div className="text-2xl font-normal text-black">동아리 상세 설명</div>
            <div className="w-full bg-gray-200 rounded-lg h-[488px] overflow-y-auto"></div>
          </div>
          <button className="w-[172px] h-[61px] flex items-center justify-center bg-gray-200 rounded-lg text-black text-2xl font-normal cursor-pointer">신청</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CbIntro;
