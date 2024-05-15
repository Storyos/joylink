import MyInfo from "../../components/myInfo/myInfo";
import { supabase } from '../../App';
import { useEffect, useState } from "react"

export default function Gallery(){
  const [imgURLs, setimgURL] = useState([]);


  useEffect(()=>{
    getAllURLs();
  },[])

  
  //bucket에 있는 사진들 리스트를 가져오는 코드
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
    return data;
  }

  async function getURL(name) {
    try {
        // 이미지 테이블에서 데이터 가져오기  
        const { data, error } = await supabase.storage.from('testtest').getPublicUrl(`${name}`)
      return data;
        // 가져온 이미지 데이터 배열을 반환
    } catch (error) {
        console.error('Error fetching images:', error.message);
        return [];
    }
  }
  async function getAllURLs(){
    const imglist = await printlist();
    var objectURL=[];  
    for(var i in imglist){
      const imgURL= await getURL(imglist[i].name);
      const response = await fetch(imgURL);
      console.log('sss',response);
      const blob = await response.blob();
      console.log('ssss',blob);
      objectURL[i] = URL.createObjectURL(blob)
    }
    console.log('다 들고 와졌나요',objectURL);
    setimgURL(objectURL);
  }

  return(
  <div className="flex justify-center">
    <div>
      <MyInfo></MyInfo>
    </div>
    <div className="w-1/2 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">갤러리</h1>
          <input type="text" id="search" placeholder="갤러리 검색" className="px-2 py-1 border-2 border-indigo-800 border-solid rounded " />
        </div>
        <hr /><br />
        <h2 className="mb-4 text-lg font-semibold bg-gray-100">갤러리 목록</h2>
        <div>
            <ul>
            {imgURLs.map((imgURLs) => (
                  <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                    <img src={imgURLs} alt={imgURLs} />
                    </li>
                ))}
            </ul>
            </div>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
  </div>
  )
}

