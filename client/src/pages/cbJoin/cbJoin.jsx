function CbJoin() {
  return (
    <div className="flex flex-col items-center justify-center w-screen py-10 bg-white">
      <div className="flex flex-col items-end justify-between w-full max-w-4xl p-6 my-4 bg-gray-300 rounded-lg">
        <div className="flex flex-col w-full gap-6">
          <div className="text-2xl text-black">가입양식</div>
          <div className="w-full bg-gray-200 rounded h-96"></div> {/* h-96 is an example height */}
        </div>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center justify-center h-16 text-2xl text-black bg-gray-300 rounded cursor-pointer w-44">
          취소
        </button>
        <button className="flex items-center justify-center h-16 text-2xl text-black bg-gray-300 rounded cursor-pointer w-44">
          신청하기
        </button>
      </div>
    </div>
  );
}

export default CbJoin;
