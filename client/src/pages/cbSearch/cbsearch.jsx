// src/CbSearch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => (
  <div className="flex items-center justify-center p-4">
    <div className="flex w-3/4 max-w-2xl">
      <input
        type="text"
        placeholder="이벤트 검색"
        className="flex-1 p-2 border border-gray-300 rounded-l-lg"
      />
      <button className="p-2 mr-4 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700">
        검색
      </button>
      <Link to="/cbCreate" className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        이벤트 만들기
      </Link>
    </div>
  </div>
);

const ClubItem = ({ title, imageSrc, description }) => (
  <div className="flex flex-col items-center w-full h-full p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-auto mb-4" />
    <div className="font-bold">{title}</div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const EventGrid = ({ events, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid w-full grid-cols-4 gap-6">
      {paginatedEvents.map(event => (
        <ClubItem key={event.id} {...event} />
      ))}
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-1 text-sm text-gray-600">
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
      <button
        key={page}
        className={`px-2 py-1 bg-gray-200 rounded ${page === currentPage ? "bg-blue-500 text-white" : ""}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ))}
  </div>
);

function CbSearch() {
  const events = [
    { id: 1, title: "로프트 테이블", imageSrc: "https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_1280.jpg", description: "청년들 테이블 이벤트" },
    { id: 2, title: "현책, 예술이 되다", imageSrc:"" , description: "예술과 책 이벤트" },
    { id: 3, title: "SWE 전문가 양성 교육", imageSrc:"" , description: "양성 교육 이벤트" },
    { id: 4, title: "멤버십 기업 모집", imageSrc:"", description: "기업 멤버십 모집 이벤트" },
    { id: 5, title: "강연회", imageSrc: "", description: "교육 강연회" },
    { id: 6, title: "콘콜러스", imageSrc: "", description: "콘콜러스 이벤트" },
    { id: 7, title: "핸드 드립", imageSrc: "", description: "핸드 드립 이벤트" },
    { id: 8, title: "비즈 클래스", imageSrc:"", description: "비즈 클래스 이벤트" },
    { id: 9, title: "변화를 주도하는 리더십", imageSrc: "", description: "리더십 이벤트" },
    { id: 10, title: "경제 독서", imageSrc:"" , description: "경제 독서 이벤트" },
    { id: 11, title: "아트 페스티벌", imageSrc: "", description: "아트 페스티벌 이벤트" },
    { id: 12, title: "Festival Q&A", imageSrc:"", description: "Q&A 이벤트" },
    { id: 13, title: "두둥두둥 악기놀이", imageSrc: "", description: "악기놀이 이벤트" },
    { id: 14, title: "ESG 컨퍼런스", imageSrc:"" , description: "ESG 컨퍼런스 이벤트" },
    { id: 15, title: "댄스 클래스", imageSrc:"" , description: "댄스 클래스 이벤트" },
    { id: 16, title: "공동데이터 활용 경진대회", imageSrc: "", description: "공동데이터 경진대회" },
    { id: 17, title: "베드민턴", imageSrc:"" , description: "청년들 테이블 이벤트" },
    { id: 18, title: "쿠킹하자", imageSrc:"" , description: "예술과 책 이벤트" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar />
      <div className="max-w-[1280px] p-8 mx-auto">
        <div className="p-4 overflow-hidden bg-white rounded shadow">
          <div className="mb-4 text-xl font-bold">진행 중인 이벤트 ({events.length}개)</div>
          <EventGrid events={events} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default CbSearch;
