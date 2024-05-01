const dbConnect = require('../config/dbConnect');


const supabase = dbConnect();

// 버킷 생성 코드
async function createbucket(){
  const { data, error } = await supabase
  .storage
  .createBucket('testtest', {
    public: true,
    allowedMimeTypes: ['image/png'],
    fileSizeLimit: 1024
  })
  if(error){
    console.log(error);
  }
}

//파일 업로드 코드
async function Uploadfile() {
  file = './nature.jpg'

  const fileOptions = {
    contentType: 'image/png',  // MIME 타입을 올바르게 설정
  }

  const { data, error } = await supabase.storage
    .from('testtest/img')
    .upload('nature', file, fileOptions)

  if (error) {
    console.error('Upload error:', error)
    return
  }

  console.log('File uploaded:', data)
}

//파일 삭제 코드
async function Deletefile(){
  const { data, error } = await supabase
  .storage
  .from('testtest')
  .remove(['folder/avatar1.png'])
}

//파일 리스트 출력 코드
async function printlist(){
  const { data, error } = await supabase
  .storage
  .from('testtest')
  .list( '',{
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })

  if(error){
    console.log(error);
  }
  return data;
}


async function displayImageFromStorage(URL) {
  // 가져올 이미지의 URL
  const imageURL = `${URL}`;

  // 이미지를 가져와서 Blob으로 변환
  const response = await fetch(imageURL);
  const blob = await response.blob();

  // Blob을 URL로 변환하여 이미지를 표시
  const objectURL = URL.createObjectURL(blob);

  // 이미지를 출력할 영역 가져오기
  const imageContainer = document.getElementById('image-container');

  // 이미지 요소 생성
  const imageElement = document.createElement('img');

  // 이미지의 URL 설정
  imageElement.src = objectURL;

  // 이미지를 출력할 영역에 이미지 요소 추가
  imageContainer.appendChild(imageElement);
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

//list에서 
async function printimg(){
  const data = await printlist();

  for(d in data){
    const imgURL = await getURLs(data[d].name)
    displayImageFromStorage(imgURL);
  }
}

printimg();

module.exports = {printlist,createbucket,Uploadfile};