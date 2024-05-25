import MyInfo from "../../components/myInfo/myInfo"

export default function myClubPagePost(){
  return(
    <div className="flex justify-center mt-28">
      <div>
        <MyInfo/>
      </div>
      <div className="w-1/2 p-5">
        <div>
          <h1>게시글 제목</h1>
          <div className=" p-2 border border-yellow-500 ...">
            <h2 className=" m-5 p-5 border border-yellow-500 ...">게시글 내용</h2>
            <h2 className=" m-5 p-5 border border-yellow-500 ...">작성한 댓글</h2>
            <div className=" m-5 p-5 border border-yellow-500 ...">
              <h2>댓글 작성</h2>
              <button className="p-1 bg-indigo-300 rounded">작성하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

