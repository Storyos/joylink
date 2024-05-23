import React from "react";
import MyInfo from "../../components/myInfo/myInfo";

export default function FreeBoard() {
  return (
    <div className="mt-28">
      <h1 className="text-center text-7xl mt-60 mb-16" id="myClub_heading" style={{ fontFamily: '"Dancing Script", sans-serif' }}>
        The #1 job board for<br /> graphic design jobs
      </h1>
      <h3 className="text-center text-xl text-gray-500 mb-60">
        Life's journey thrives on exploration, the ultimate way to connect with<br />
        opportunities and discover new horizons globally.
      </h3>

      <div className="flex justify-center">
        <div className="mb-16">
          <MyInfo />
        </div>
        <div className="w-3/5 p-6">
          <div className="flex justify-between items-center mt-8 mb-16">
            <h1 className="text-2xl font-bold" style={{ fontFamily: '"Dancing Script", sans-serif' }}>Free board</h1>
            <input type="text" id="search" placeholder="게시글 검색" className="border px-2 py-1 rounded mt-2" />
          </div>
          <hr />
          {/* 여기에 게시글 목록 컴포넌트를 추가 */}
        </div>
      </div>
    </div>
  );
}
