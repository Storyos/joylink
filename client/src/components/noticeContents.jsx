import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { supabase } from '../App';

export default function NoticeContents (props) {
  
  const menu = props.menu
  const [details, setDetails] = useState(false)
  const [noticelist,setNoticeList]= useState([]);
  const [noticebody, setNoticeBody] = useState([]);
  useEffect(() => {
    setDetails(false);
  }, [menu]);
  
  const handleDetails = (data) => {
    setDetails(true)
  }

  const handleNoticeDetail =(a)=>{
    setDetails(true);
    console.log("notice r값:",a);
    setNoticeBody(a);
  }

  const handleList = () => {
    setDetails(false)
  }
  useEffect(() => {
    getNoticeList();
  }, [])
  

  const getNoticeList = async () =>{
    const {data,error} = await supabase.from('notice').select('*');
    if(error){
      console.log(error);
    }else{
      console.log(data);
      setNoticeList(data);
    }
  }


  const NoticeList =  () => {
    
    return (

      <div className="w-[800px] rounded-[10px] bg-white shadow">
        <div className="flex justify-end mt-4" >
          <input className="px-2 py-1 mr-2 bg-gray-100 rounded-md outline-none" type="text" placeholder="게시글 검색"/>
          <button className="px-2 bg-gray-100 rounded-[5px] hover:bg-[#e9e9e9] mr-4">검색</button>
        </div>
        <div className="min-h-[400px] m-4 py-4 rounded-[10px] bg-gray-100">
          {menu == "Notice" &&
            <div>
              <ul>
                {noticelist.map((noticelist, index) => (
                  <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                    <Link to="/notice/${notice.id}">
                    <button onClick={() =>handleNoticeDetail(noticelist)}> {noticelist.title}
                    </button>
                    </Link></li>
                ))}
              </ul>
            </div>
          }
          
          {menu == "Event" &&
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${event.id}"><button onClick={handleDetails}>이벤트1</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${event.id}"><button onClick={handleDetails}>이벤트2</button></Link></li>
            </ul>
          }
          
          {menu == "Menual" && 
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button onClick={handleDetails}>메뉴얼1</button></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button onClick={handleDetails}>메뉴얼2</button></li>
            </ul>
          }

        </div>
      </div>
    )
  }

  const NoticeDetail = () => {
    return (
      <div className="w-[800px] rounded-lg bg-white shadow">
        <div className="px-4 py-2 m-4 text-sm bg-gray-100 rounded-lg">
          <h1 className="text-lg font-bold">
            {menu == `Notice` && `${noticebody.title}`}
            {menu == "Event" && "이벤트1"}
            {menu == "Menual" && "메뉴얼1"}
          </h1>
        </div>
        <div className="min-h-[360px] m-4 p-4 rounded-lg bg-gray-100">
          <p className="">
            {menu == `Notice` && `${noticebody.body}`}

          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/notice"><button className="mx-4 py-1 px-2 bg-[#e9e9e9] rounded-md" onClick={handleList}> 목록</button></Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {details ? <NoticeDetail /> : <NoticeList /> }
    </>
  )
}