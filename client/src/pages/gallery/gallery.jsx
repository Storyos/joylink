import MyInfo from "../../components/myInfo/myInfo";
import { supabase } from '../../App';
import { useEffect, useState } from "react"

export default function Gallery() {
  const [imgURLs, setImgURLs] = useState([]);

  useEffect(() => {
    getAllURLs();
  }, [])

  // bucket에 있는 사진들 리스트를 가져오는 코드
  async function printlist() {
    const { data, error } = await supabase
      .storage
      .from('testtest')
      .list('img', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
    if (error) {
      console.log(error);
    }
    return data;
  }

  async function getURL(name) {
    const { data, error } = await supabase
      .storage
      .from('testtest')
      .getPublicUrl(name);

    if (error) {
      console.error('Error getting public URL:', error.message);
      return null;
    }
    console.log('Retrieved URL:', data.publicUrl); // 경로 확인을 위한 로깅 추가
    return data.publicUrl;
  }

  async function getAllURLs() {
    const imglist = await printlist();
    const objectURLs = [];

    for (let i in imglist) {
      const imgURL = await getURL(`img/${imglist[i].name}`);
      if (imgURL) {
        objectURLs.push(imgURL);
      }
    }
    console.log('모든 이미지 URL:', objectURLs);
    setImgURLs(objectURLs);
  }

  return (
    <div className="mt-28">
      <h1 className="text-center text-6xl mt-40 mb-16" id="myClub_heading" style={{ fontFamily: '"Dancing Script", sans-serif' }}>
        The #1 job board for<br></br> graphic design jobs
      </h1>
      <h3 className="text-center text-xl text-gray-500 mb-20">
        Life's journey thrives on exploration, the ultimate way to connect with<br></br>
        opportunities and discover new horizons globally.
      </h3>

      <div className="flex justify-center">
        <div className="mb-16">
          <MyInfo />
        </div>
        <div className="w-3/5 p-6">
          <div className="flex items-center justify-between mt-8 mb-16">
            <h1 className="text-2xl font-bold" style={{ fontFamily: '"Dancing Script", sans-serif' }}>Gallery</h1>
            <input type="text" id="search" placeholder="갤러리 검색" className="px-2 py-1 border rounded mt-2" />
          </div>
          <hr/>

          <div>
            <ul className="flex flex-wrap">
              {imgURLs.map((url, index) => (
                <li key={index} className="w-1/3 p-5">
                  <img src={url} alt={`Image ${index}`}className="max-w-full rounded-lg" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


