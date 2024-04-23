import React from 'react';

const SearchBar = () => (
  <div className="flex items-center justify-center p-4">
    <div className="flex w-3/4 max-w-2xl">
      <input
        type="text"
        placeholder="동아리 검색"
        className="flex-1 p-2 border border-gray-300 rounded-l-lg" // flex-1을 사용하여 너비를 최대로 확장
      />
      <button className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700">
        검색
      </button>
    </div>
  </div>
);


const ClubItem = () => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 min-h-24">
    <span className="block">동아리 정보</span>
    <button className="p-2 text-white bg-green-500 rounded hover:bg-green-700">
      신청
    </button>
  </div>
);

const ClubList = () => {
  const clubs = [1, 2, 3, 4, 5];
  return (
    <div>
      {clubs.map((club) => (
        <ClubItem key={club} />
      ))}
    </div>
  );
};

function CbSearch() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar />
      <div className="max-w-4xl p-8 mx-auto">
        <div className="p-4 bg-white rounded shadow">
          <div className="mb-4 text-xl font-bold">동아리 상세 설명</div>
          <ClubList />
        </div>
        <div className="p-4 text-center text-gray-600"></div>
      </div>
    </div>
  );
}

export default CbSearch;
