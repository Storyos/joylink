export default function NoticeDetail () {

  return (
    <>
      <div className="w-2/3 rounded-lg bg-[#c9c9c9]">
        <div className="bg-[#e9e9e9] rounded-lg m-4 py-2 px-4 text-sm">
          <h1 className="text-lg font-bold">공지사항 1</h1>
        </div>
        <div className="min-h-[360px] m-4 p-4 rounded-lg bg-white">
          <p className="">공지사항 세부 내용</p>
        </div>
        <div className="flex justify-end">
          <button className="mx-4 py-1 px-2 bg-[#e9e9e9] rounded-md"> 목록</button>
        </div>
      </div>
    </>
  )
}