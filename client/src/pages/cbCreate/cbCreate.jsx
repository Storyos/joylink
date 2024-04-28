import React from 'react';

function CbCreate() {
  return (
    <>
      <Header />
 <div>
        <div className="flex flex-col justify-between bg-white">
          <div className="max-w-4xl mx-auto p-7">
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-lg text-black">동아리명</span>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-black">동아리 분류</span>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-black">활동 지역</span>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-black">동아리 설명</span>
                <div className="overflow-y-auto bg-gray-200 rounded-lg h-72"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-7">
            <button className="p-4 text-lg text-black bg-gray-200 rounded-lg">취소</button>
            <button className="p-4 text-lg text-black bg-gray-200 rounded-lg">생성</button>
          </div>
        </div>
 </div>
      <Footer />
    </>
  );
}

export default CbCreate;
