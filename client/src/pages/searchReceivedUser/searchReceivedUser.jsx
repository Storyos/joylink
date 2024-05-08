
export default function SearchReceivedUser () {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] h-[400px] border-2 p-1">
        <div className="flex justify-between mb-4">
          <span className="ml-2">유저 검색</span>
          <span>
            <input type="text" className="border-2"/>
            <button className="px-1 mx-1 border-2 hover:bg-[#e9e9e9]">확인</button>
          </span>
        </div>
        <div className="flex justify-center">
          <table className="text-center">
            <tr>
              <td className="border-2 w-[100px]">이름</td>
              <td className="border-2 w-[200px]">이메일</td>
            </tr>
            <tr>
              <td className="border-2"><button className="hover:bg-[#e9e9e9] px-1">1234</button></td>
              <td className="border-2">1234@naver.com</td>
            </tr>
            <tr>
              <td className="border-2"><button className="hover:bg-[#e9e9e9] px-1">5678</button></td>
              <td className="border-2">5678@naver.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}