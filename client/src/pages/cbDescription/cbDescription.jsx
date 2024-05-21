import React from 'react';


function CbDescription() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Section: club.summary */}
      <section className="w-[1280px] bg-white mb-10 p-[25px_30px_20px] rounded-lg shadow-lg">
        <div className="flex h-[320px]">
          {/* Image */}
          <div className="flex-shrink-0">
            <img src="https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_1280.jpg" alt="AI Seed Camp Thumbnail" className="w-[320px] h-[320px] object-cover" />
          </div>
          {/* Event Info */}
          <div className="flex flex-col justify-between ml-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold">서울 AI 허브X인포뱅크 2024년 AI Seed Camp 참여기업 모집공고 (~5/31 23:00)</h1>
              <p className="text-gray-700 mb-2 w-[850px] p-[0px_0px_0px_2px]">
                AI Seed Camp는 인공지능 기술 기반 초기 스타트업을 위한 성장지원 프로그램으로, 멘토링/컨설팅, 운영지원금 및 투자유치를 지원합니다.
              </p>
              <div className="flex flex-wrap mb-4 space-x-2">
                <a href="#" className="text-blue-500 hover:underline">#컨설팅</a>
                <a href="#" className="text-blue-500 hover:underline">#AI</a>
                <a href="#" className="text-blue-500 hover:underline">#액셀러레이팅</a>
                <a href="#" className="text-blue-500 hover:underline">#데모데이</a>
                <a href="#" className="text-blue-500 hover:underline">#투자유치</a>
              </div>
              <ul className="event-info-wrap mb-[39px] p-[0px_0px_15px]">
                <li className="mb-2">
                  <span className="text-gray-500">이벤트 기간:</span>
                  <span className="ml-2 text-gray-700">2024.06.01 (토) 00:00 ~ 2024.11.30 (토) 00:00</span>
                </li>
                <li className="mb-2">
                  <span className="text-gray-500">이벤트 장소:</span>
                  <span className="ml-2 text-gray-700">미정이거나 등록된 이벤트장소가 없습니다.</span>
                </li>
              </ul>
            </div>
            <div className="group-area w-[828px] h-[181.25px] p-10 bg-gray-100 rounded-lg">
              <p>추가 정보 영역</p>
            </div>
          </div>
        </div>
        <div className="host-info-area w-[320px] h-[192px] bg-gray-100 rounded-lg p-4 mt-4">
          <h2 className="mb-2 text-xl font-semibold">개설자 정보</h2>
          <p className="text-gray-700">담당자</p>
          <p className="text-gray-500">이메일: ******@******.***</p>
          <p className="text-gray-500">전화번호: ***-****-****</p>
        </div>
      </section>

      {/* Section: club.detail */}
      <section className="w-[1280px] bg-white p-4 rounded-lg shadow-lg">
        {/* Menu Tabs */}
        <ul className="tap.menu flex border-b mb-4">
          <li className="pb-2 mr-4 text-blue-500 border-b-2 border-blue-500 cursor-pointer">상세정보</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">문의</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">기대평</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">참여신청</li>
          <li className="pb-2 mr-4 text-gray-500 cursor-pointer hover:text-blue-500">취소 안내</li>
        </ul>

        {/* Tab Content */}
        <div className="tab_content w-[1274.67px] p-[30px]">
          <h2 className="mb-4 text-2xl font-semibold">상세내용</h2>
          <p className="mb-4">
            AI Seed Camp는 인공지능 기술 기반 초기 스타트업을 위한 성장지원 프로그램입니다.
            AI Seed Camp는 사업화, 멘토링, 투자유치 등을 통해 스타트업의 성장을 지원합니다.
          </p>
          <h3 className="mt-6 mb-2 text-xl font-semibold">지원 대상</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>인공지능 기술을 활용한 초기 스타트업</li>
            <li>다양한 창업지원 프로그램을 원하는 팀</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">지원 내용</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>사업화 지원금</li>
            <li>AI 전문 멘토링 프로그램</li>
            <li>투자유치 및 네트워킹 기회 제공</li>
          </ul>
          <h3 className="mt-6 mb-2 text-xl font-semibold">신청 방법</h3>
          <p className="mb-4">
            홈페이지에서 온라인 신청서를 작성하여 제출하세요. <a href="https://startup-plus.kr" className="text-blue-500">바로가기</a>
          </p>
          <h3 className="mt-6 mb-2 text-xl font-semibold">문의</h3>
          <p>문의처: mgmt@infobank.com</p>
          <p>전화번호: 02-1234-5678</p>
          <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">신청하기</button>
        </div>
      </section>
    </div>
  );
}

export default CbDescription;
