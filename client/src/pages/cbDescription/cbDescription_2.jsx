import React from 'react';

export default function CbDescription_2() {
  const handleScrollToDetails = () => {
    const detailsSection = document.getElementById('details-section');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center font-custom mt-28">
      {/* Section: club.summary */}
      <section className="w-[1280px] bg-white mb-10 p-[25px_30px_20px] rounded-lg shadow-lg">
        <div className="flex">
          {/* Image and Host Info */}
          <div className="flex-shrink-0">
            <img src="vr_src/band_club/band_poster.png" alt="Let's Rock Thumbnail" className="w-[320px] h-[320px] object-cover rounded-lg" />
            <div className="host-info-area h-[220px] w-[320px] mt-4 bg-gray-100 rounded-lg p-4 flex items-center">
              <div>
                <h2 className="mb-2 text-xl font-semibold">동아리 회장 정보</h2>
                <br />
                <p className="text-gray-700">담당자: 이지훈</p>
                <p className="text-gray-500">이메일: letsrock@domain.com</p>
                <p className="text-gray-500">전화번호: 010-9876-5432</p>
              </div>
            </div>
          </div>
          {/* Event Info */}
          <div className="flex flex-col justify-between ml-6">
            <div>
              <h1 className="mt-4 mb-2 text-3xl font-bold">Let's Rock 신입 회원 모집</h1>
              <p className="text-gray-700 mb-2 w-[850px] p-[0px_0px_0px_2px]">
                Let's Rock은 다양한 음악 장르를 연주하고, 팀워크를 키우는 밴드 모임입니다. 음악의 역사와 연주 기법을 배우고, 서로의 음악을 공유하며 즐거운 시간을 보낼 수 있습니다.
              </p>
              <div className="flex flex-wrap mb-4 space-x-2">
                <a href="#" className="text-blue-500 hover:underline">#음악</a>
                <a href="#" className="text-blue-500 hover:underline">#밴드</a>
                <a href="#" className="text-blue-500 hover:underline">#연주</a>
                <a href="#" className="text-blue-500 hover:underline">#팀워크</a>
                <a href="#" className="text-blue-500 hover:underline">#친목</a>
              </div>
              <ul className="event-info-wrap mb-[39px] p-[0px_0px_15px]">
                <li className="mb-2">
                  <span className="text-gray-500">모임 장소:</span>
                  <span className="ml-2 text-gray-700">서울 강남구 인근 연습실</span>
                </li>
              </ul>
              <button onClick={handleScrollToDetails} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                상세정보 보기
              </button>
            </div>
            <div className="p-10 bg-gray-100 rounded-lg group-area">
              <h3 className="mb-4 text-xl font-semibold">수상이력 및 대외활동</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>2022년 전국 밴드 경연대회 우승</li>
                <li>2023년 서울 밴드 페스티벌 참가</li>
                <li>2023년 대한민국 밴드 협회 주최 워크숍 참가</li>
                <li>2024년 아시아 음악 페스티벌 초청</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: club.detail */}
      <section id="details-section" className="w-[1280px] bg-white p-4 rounded-lg shadow-lg mb-5">
        {/* Menu Tabs */}
        <ul className="tap.menu flex border-b mb-4">
          <li className="pb-2 mr-4 text-blue-500 border-b-2 border-blue-500 cursor-pointer">상세정보</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">문의</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">후기</li>
        </ul>

        {/* Tab Content */}
        <div className="tab_content w-[1274.67px] p-[30px]">
          <h2 className="mb-4 text-2xl font-semibold">상세내용</h2>
          <p className="mb-4">
            Let's Rock은 다양한 음악 장르를 연주하고, 팀워크를 키우는 밴드 모임입니다. 음악의 역사와 연주 기법을 배우고, 서로의 음악을 공유하며 즐거운 시간을 보낼 수 있습니다.
          </p>
          <h3 className="mt-6 mb-2 text-xl font-semibold">지원 대상</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>음악에 관심이 있는 모든 분</li>
            <li>새로운 친구들과의 만남을 원하는 분</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">활동 내용</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>매주 다양한 음악 연주 배우기</li>
            <li>정기적인 밴드 연습 및 공연</li>
            <li>음악 이론 및 작곡</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">문의</h3>
          <p>문의처: letsrock@domain.com</p>
          <p>전화번호: 010-9876-5432</p>
          <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">신청하기</button>
        </div>
      </section>
    </div>
  );
}