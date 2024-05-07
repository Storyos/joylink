// src/CbSearch.jsx
import React from 'react';
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

const EventItem = ({ title, imageSrc, description }) => (
  <div className="flex flex-col items-center w-full h-full p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-auto mb-4 rounded-lg" />
    <div className="font-bold">{title}</div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const EventGrid = () => {
  const events = [
    { id: 1, title: "로프트 테이블", imageSrc: "https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_1280.jpg", description: "청년들 테이블 이벤트" },
    { id: 2, title: "현책, 예술이 되다", imageSrc: "https://cdn.pixabay.com/photo/2022/08/02/14/11/flower-7361784_1280.jpg", description: "예술과 책 이벤트" },
    { id: 3, title: "SWE 전문가 양성 교육", imageSrc: "https://cdn.pixabay.com/photo/2021/02/12/19/51/office-6004749_1280.jpg", description: "양성 교육 이벤트" },
    { id: 4, title: "멤버십 기업 모집", imageSrc: "https://cdn.pixabay.com/photo/2018/01/17/18/03/office-3082813_1280.jpg", description: "기업 멤버십 모집 이벤트" },
    { id: 5, title: "강연회", imageSrc: "https://cdn.pixabay.com/photo/2019/01/19/23/13/audience-3947036_1280.jpg", description: "교육 강연회" },
    { id: 6, title: "콘콜러스", imageSrc: "https://cdn.pixabay.com/photo/2022/05/11/15/39/nature-7189225_1280.jpg", description: "콘콜러스 이벤트" },
    { id: 7, title: "핸드 드립", imageSrc: "https://cdn.pixabay.com/photo/2016/03/26/13/09/coffee-1281702_1280.jpg", description: "핸드 드립 이벤트" },
    { id: 8, title: "비즈 클래스", imageSrc: "https://cdn.pixabay.com/photo/2017/09/11/11/02/beads-2731165_1280.jpg", description: "비즈 클래스 이벤트" },
    { id: 9, title: "변화를 주도하는 리더십", imageSrc: "https://cdn.pixabay.com/photo/2019/01/14/23/20/leader-3939486_1280.jpg", description: "리더십 이벤트" },
    { id: 10, title: "경제 독서", imageSrc: "https://cdn.pixabay.com/photo/2017/08/07/23/56/life-2608307_1280.jpg", description: "경제 독서 이벤트" },
    { id: 11, title: "아트 페스티벌", imageSrc: "https://cdn.pixabay.com/photo/2021/05/07/10/40/art-6236527_1280.jpg", description: "아트 페스티벌 이벤트" },
    { id: 12, title: "Festival Q&A", imageSrc: "https://cdn.pixabay.com/photo/2015/07/28/23/21/concert-865104_1280.jpg", description: "Q&A 이벤트" },
    { id: 13, title: "두둥두둥 악기놀이", imageSrc: "https://cdn.pixabay.com/photo/2016/11/29/12/54/band-1869732_1280.jpg", description: "악기놀이 이벤트" },
    { id: 14, title: "ESG 컨퍼런스", imageSrc: "https://cdn.pixabay.com/photo/2019/11/18/14/36/office-4630203_1280.jpg", description: "ESG 컨퍼런스 이벤트" },
    { id: 15, title: "댄스 클래스", imageSrc: "https://cdn.pixabay.com/photo/2016/06/06/23/10/breakdancing-1432752_1280.jpg", description: "댄스 클래스 이벤트" },
    { id: 16, title: "공동데이터 활용 경진대회", imageSrc: "https://cdn.pixabay.com/photo/2015/09/05/22/46/contest-925758_1280.jpg", description: "공동데이터 경진대회" }
  ];

  return (
    <div className="grid w-full grid-cols-4 gap-6">
      {events.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
};

function CbSearch() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar />
      <div className="max-w-[1280px] p-8 mx-auto">
        <div className="p-4 overflow-hidden bg-white rounded shadow">
          <div className="mb-4 text-xl font-bold">진행 중인 이벤트 (16개)</div>
          <EventGrid />
        </div>
        <div className="flex justify-center mt-4 space-x-1 text-sm text-gray-600">
          <Link to="#" className="px-2 py-1 bg-gray-200 rounded">1</Link>
          <Link to="#" className="px-2 py-1 bg-gray-200 rounded">2</Link>
          <Link to="#" className="px-2 py-1 bg-gray-200 rounded">3</Link>
          <Link to="#" className="px-2 py-1 bg-gray-200 rounded">4</Link>
        </div>
      </div>
    </div>
  );
}

export default CbSearch;
