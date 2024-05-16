
export default function ViewAccountPage() {
  return (
    <>
      <div className="flex justify-center md:mx-8 lg:mx-60">
        {/* 왼쪽 창 */}
        <div className="flex flex-col items-center mr-2">
          <h1>장부 정보 확인</h1>
          <button className="w-24 text-white bg-indigo-500 rounded m-5 hover:bg-indigo-400">계좌 정보</button>
          <button className="w-24 text-white bg-indigo-500 rounded m-5 hover:bg-indigo-400">입출금 내역</button>
        </div>
        {/* 오른쪽 창 */}
        <div className="border border-gray-400 rounded-md p-4 flex-grow m-3">
          {/* 오른쪽 내용을 여기에 추가하세요 */}
        </div>
      </div>
    </>
  );
}

