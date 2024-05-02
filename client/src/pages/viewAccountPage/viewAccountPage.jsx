export default function ViewAccountPage() {
  return (
    <>
      <div className="flex justify-between">
        {/* 왼쪽 창 */}
        <div className="flex flex-col items-center mr-10 m-2">
          <h1>장부 정보 확인</h1>
          <button className="w-24 text-white bg-sky-500/75 rounded m-5 hover:bg-opacity-70 hover:bg-sky-600">계좌 정보</button>
          <button className="w-24 text-white bg-sky-500/75 rounded m-5 hover:bg-opacity-70 hover:bg-sky-600">입출금 내역</button>
        </div>
        {/* 오른쪽 창 */}
        <div className="border border-gray-400 rounded-md p-4 flex-grow m-3">
          {/* 오른쪽 내용을 여기에 추가하세요 */}
        </div>
      </div>
    </>
  );
}
