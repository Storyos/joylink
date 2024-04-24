
import React from 'react';

const Sidebar = () => {
    return (
      <aside className="flex flex-col w-full h-full bg-gray-200 md:w-full p-5 border-separate rounded-[20px] border-8">
        <h2 className="mb-4 text-xl font-semibold">메뉴</h2>
        <ul className="flex flex-col flex-grow">
          <li className="mb-2">공지사항</li>
          <li className="mb-2">이벤트</li>
          <li className="mb-2">메뉴얼</li>
          {/* Additional categories here */}
        </ul>
      </aside>
    );
  };
  
const NoticeList = () => {
    return (
    <div className="bg-gray-300  border-separate rounded-[20px] border-8 p-4">
          <div className="flex-grow p-4">
            <div className="flex items-center justify-between">
              <h2 className="flex-grow mb-2 text-lg">공지리스트</h2>
              <div className="relative">
                <input className="px-2 py-1 border rounded w-80 text-grey-darker" type="text" placeholder="Search Notices" />
              </div>
            </div>
            <ul className="list-reset">
              {/* Map over your notices here */}
              <li className="py-2 border-b-4">Notice 1</li>
              <li className="py-2 border-b-4">Notice 2</li>
              <li className="py-2 border-b-4">Notice 3</li>
              <li className="py-2 border-b-4">Notice 4</li>
              <li className="py-2 border-b-4">Notice 5</li>
              <li className="py-2 border-b-4">Notice 6</li>
              <li className="py-2 border-b-4">Notice 7</li>
              <li className="py-2 border-b-4">Notice 8</li>
              <li className="py-2 border-b-4">Notice 9</li>
              <li className="py-2 border-b-4">Notice 10</li>
              {/* Add more list items here */}
            </ul>
          </div>
    </div>
    );
  };

<<<<<<< HEAD
  const NoticePage = () => {
=======
  const Notice = () => {
>>>>>>> b34d9bebc74473410a94749a965986dccf4e46de
    return (
      <div className="container p-4 mx-auto mb-16">
        <div className="flex items-center h-20 mb-4 bg-white">
          {/* 화면 가로기준 왼쪽에 배치하고, 부모 요소 세로 기준으로 중앙에 배치 */}
          <h1 className="w-full text-3xl font-bold">공지사항</h1>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/5">
            <Sidebar />
          </div>
          <div className="flex-grow ml-12">
            <NoticeList />
          </div>
        </div>
      </div>
    );
  };
  
  
<<<<<<< HEAD
  export default NoticePage;
=======
  export default Notice;
>>>>>>> b34d9bebc74473410a94749a965986dccf4e46de
