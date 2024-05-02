export default function ChattingModal () {


  return (
    <>
      <div className="fixed rounded-[10px] w-[450px] h-[500px] inset-0 m-auto bg-[#e9e9e9] shadow-lg">
        <div className="relative w-full h-full">
          <div className="mt-2 text-center">채팅</div>
          <button className="absolute text-[#a9a9a9] right-4 top-0">X</button>

          {/* 채팅 영역 */}
          <div className="absolute flex flex-col w-[420px]">
            
            {/* 남이 쓴 채팅 */}
            <div className="flex my-2 ml-4">
              <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
              <div className="inline-block ml-4">
                <div>user1</div>
                <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">가나다라마바사</div>
              </div>
            </div>


            <div className="flex my-2 ml-4">
              <div className="bg-[#C0E4FF] w-[30px] h-[30px] inline-block rounded-[10px] mt-2"></div>
              <div className="inline-block ml-4">
                <div>user2</div>
                <div className="bg-white max-w-[300px] inline-block rounded-[10px] py-1 px-2">채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅</div>
              </div>
            </div>
            
            {/* 내가 쓴 채팅 */}
            <div className="flex self-end my-2 ">
              <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅채팅</div>
            </div>
            
            <div className="flex self-end my-2">
              <div className="bg-[#fff951] max-w-[300px] inline-block rounded-[10px] py-1 px-2">내가 쓴 채팅</div>
            </div>
            
          </div>
          

          {/* 채팅 입력창 */}
          <div className="absolute bottom-0 rounded-b-[10px] bg-white ">
            <textarea name="" id="" rows={3} className="w-[450px] resize-none outline-none pt-2 px-2" placeholder="채팅 입력"></textarea>
            <div className="text-end"><button className="px-5 py-1 mb-2 mr-2 border-2 bg-[#e9e9e9] rounded-[20px]">전송</button></div>
          </div>
        </div>
      </div>
    </>
  )
}