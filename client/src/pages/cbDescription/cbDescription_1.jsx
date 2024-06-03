import React from 'react';

function CbDescription_1() {
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
            <img src="vr_src/football_club/footballclub.png" alt="FC Forest Thumbnail" className="w-[320px] h-[320px] object-cover rounded-lg" />
            <div className="host-info-area h-[220px] w-[320px] mt-4 bg-gray-100 rounded-lg p-4 flex items-center">
              <div>
                <h2 className="mb-2 text-xl font-semibold">동아리 회장 정보</h2>
                <br />
                <p className="text-gray-700">담당자: 김철수</p>
                <p className="text-gray-500">이메일: fcforest@domain.com</p>
                <p className="text-gray-500">전화번호: 010-1234-5678</p>
              </div>
            </div>
          </div>
          {/* Event Info */}
          <div className="flex flex-col justify-between ml-6">
            <div>
              <h1 className="mt-4 mb-2 text-3xl font-bold">FC 포레스트 신입 회원 모집</h1>
              <p className="text-gray-700 mb-2 w-[850px] p-[0px_0px_0px_2px]">
                FC 포레스트는 다양한 축구 기술을 배우고, 팀워크를 키우는 모임입니다. 축구의 역사와 전략을 배우고, 서로의 플레이를 공유하며 즐거운 시간을 보낼 수 있습니다.
              </p>
              <div className="flex flex-wrap mb-4 space-x-2">
                <a href="#" className="text-blue-500 hover:underline">#축구</a>
                <a href="#" className="text-blue-500 hover:underline">#스포츠</a>
                <a href="#" className="text-blue-500 hover:underline">#팀워크</a>
                <a href="#" className="text-blue-500 hover:underline">#운동</a>
                <a href="#" className="text-blue-500 hover:underline">#친목</a>
              </div>
              <ul className="event-info-wrap mb-[39px] p-[0px_0px_15px]">
                <li className="mb-2">
                  <span className="text-gray-500">모임 장소:</span>
                  <span className="ml-2 text-gray-700">서울 월드컵경기장 근처 운동장</span>
                </li>
              </ul>
              <button onClick={handleScrollToDetails} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                상세정보 보기
              </button>
            </div>
            <div className="p-10 bg-gray-100 rounded-lg group-area">
              <h3 className="mb-4 text-xl font-semibold">수상이력 및 대외활동</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>2022년 전국 아마추어 축구대회 준우승</li>
                <li>2023년 서울시 축구 리그 참가</li>
                <li>2023년 대한민국 축구 협회 주최 워크숍 참가</li>
                <li>2024년 아시아 축구 페스티벌 초청</li>
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
            FC 포레스트는 다양한 축구 기술을 배우고, 팀워크를 키우는 모임입니다. 축구의 역사와 전략을 배우고, 서로의 플레이를 공유하며 즐거운 시간을 보낼 수 있습니다.
          </p>
          <h3 className="mt-6 mb-2 text-xl font-semibold">지원 대상</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>축구에 관심이 있는 모든 분</li>
            <li>새로운 친구들과의 만남을 원하는 분</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">활동 내용</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>매주 다양한 축구 기술 배우기</li>
            <li>친선 경기 및 대회 참가</li>
            <li>팀 전략 및 전술 분석</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">문의</h3>
          <p>문의처: fcforest@domain.com</p>
          <p>전화번호: 010-1234-5678</p>
          <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">신청하기</button>
        </div>
      </section>
    </div>
  );
}

export default CbDescription_1;
