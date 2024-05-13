import MyInfo from "../../components/myInfo/myInfo";
import { supabase } from '../../App';
import { useEffect, useState } from "react"

export default function Gallery(){
  const [imglist, setprintlist] = useState([]);
  const [imgURL, setimgURL] = useState([]);

  useEffect(()=>{
    printlist();
  },[])

  useEffect(()=>{
    printimg();
  },[])
  async function printlist(){
    const { data, error } = await supabase
    .storage
    .from('testtest')
    .list( 'img',{
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    })
  
    if(error){
      console.log(error);
    }
    console.log(data);
    setprintlist(data);
  }

  async function getURLs(name) {
    try {
      console.log(`${name}`);
        // 이미지 테이블에서 데이터 가져오기  
      
    const { data, error } = await supabase.storage.from('testtest').getPublicUrl(`${name}`)
    
    console.log('ss',data);
        // 가져온 이미지 데이터 배열을 반환
    return data;
    } catch (error) {
        console.log("이거 URL: ",name)
        console.error('Error fetching images:', error.message);
        return [];
    }
  }
  async function printimg(){
  
    for(var i in imglist){
      const imgURL = await getURLs(imglist[i].name)
      displayImageFromStorage(imgURL);
    }
  }
  async function displayImageFromStorage(URL) {
    // 가져올 이미지의 URL
    const imageURL = `${URL}`;
  
    // 이미지를 가져와서 Blob으로 변환
    const response = await fetch(imageURL);
    const blob = await response.blob();
  
    // Blob을 URL로 변환하여 이미지를 표시
    const objectURL = URL.createObjectURL(blob);
  
  
    // 이미지 요소 생성
    const imageElement = document.createElement('img');
  
    // 이미지의 URL 설정
    imageElement.src = objectURL;

  }

  return(
  <div className="flex justify-center">
    <div>
      <MyInfo></MyInfo>
    </div>
    <div className="w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">갤러리</h1>
          <input type="text" id="search" placeholder="갤러리 검색" className=" border-indigo-800 border-solid border-2 px-2 py-1 rounded" />
        </div>
        <hr /><br />
        <h2 className="text-lg font-semibold mb-4  bg-gray-100">갤러리 목록</h2>
        <div>
              <ul>
                {imgURL.map((imgURL) => (
                  <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                    <Link to="/notice/${notice.id}">
                    <button onClick={() =>handleNoticeDetail(noticelist)}> {noticelist.title}
                    </button>
                    </Link></li>
                ))}
              </ul>
            </div>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
  </div>
  )
}

