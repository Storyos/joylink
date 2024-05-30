import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => (
  <div className="flex items-center justify-center p-4 mt-28">
    <div className="w-full max-w-[1280px] p-4 bg-white border border-gray-300 rounded-lg shadow">
      <div className="flex flex-wrap items-stretch items-center justify-between w-full space-x-2">
        <select className="w-full p-2 border border-gray-300 rounded-md sm:w-auto">
          <option value="">카테고리</option>
          <option value="type1">예술,미술</option>
          <option value="type2">스포츠</option>
          <option value="type3">학술</option>
          <option value="type4">반려동물</option>
          <option value="type5">경제</option>
          <option value="type6">영화</option>
        </select>
        <select className="w-full p-2 border border-gray-300 rounded-md sm:w-auto">
          <option value="">지역</option>
          <option value="region1">서울</option>
          <option value="region2">경기</option>
          <option value="region3">강원</option>
          <option value="region4">대구/경북</option>
          <option value="region5">부산/경남</option>
          <option value="region6">광주/전남</option>
          <option value="region2">전북</option>
          <option value="region2">제주</option>
          <option value="region2">충청</option>
          
        </select>
        <select className="w-full p-2 border border-gray-300 rounded-md sm:w-auto">
          <option value="">시간</option>
          <option value="time1">정기</option>
          <option value="time2">비정기</option>
        </select>
  <select className="w-full p-2 border border-gray-300 rounded-md sm:w-auto">
          <option value="">회비여부</option>
          <option value="event1">정기납부</option>
          <option value="event2">없음</option>
        </select>
        <div className="flex items-center w-full h-full p-2 border border-gray-300 rounded-md sm:flex-1">
          <input
            type="text"
            placeholder="검색어 입력"
            className="flex-1 h-full p-2 border-none outline-none"
          />
          <button className="h-full p-2 text-blue-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l5.386 5.387-1.414 1.414-5.386-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <label className="flex items-center ml-4">
          <input type="checkbox" className="mr-2" />
          종료된 이벤트 포함
        </label>
        <Link to="/cbCreate" className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
          모임 만들기
        </Link>
      </div>
    </div>
  </div>
);

export default SearchBar;
