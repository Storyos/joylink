import MyInfo from "../../components/myInfo/myInfo";

export default function Gallery(){

  return(
  <div className="flex justify-center">
    <div>
      <MyInfo></MyInfo>
    </div>
    <div className="w-1/2 p-6">
      <h1>갤러리</h1>
    </div>
  </div>
  )
}

