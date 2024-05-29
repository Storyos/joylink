export default function ClubModels ({ category, index }) {

  const applicationForm = "/vr_src/application_form.png";

  const books1 = "vr_src/books1.glb";
  const books2 = "vr_src/books2.glb";
  const picture1 = "vr_src/picture1.glb";
  const picture2 = "vr_src/picture2.glb";
  const camera = "vr_src/camera.glb";
  const box = "vr_src/box.glb";
  const microphone = "vr_src/microphone.glb";
  const guitar = "vr_src/guitar.glb";
  const drum = "vr_src/drum.glb";
  const monopoly = "vr_src/monopoly.glb";
  const boardgame = "vr_src/boardgame.glb";
  const backpack = "vr_src/backpack.glb";
  const hat = "vr_src/hat.glb";
  const mountain = "vr_src/mountain.glb";
  const readingPoster = "vr_src/reading_poster.png";
  const photographyPoster = "vr_src/photography_poster.png";
  const bandPoster = "vr_src/band_poster.png";
  const boardgamePoster = "vr_src/boardgame_poster.png";
  const climbingPoster = "vr_src/climbing_poster.png";
  const traverPoster = "vr_src/traver_poster.png";
  
  // 축구동아리 소스
  const footballshoes = "vr_src/football_club/football_shoes.glb"
  const football_set="vr_src/football_club/football_set.glb"
  const soccer_uniform = "vr_src/football_club/soccer_uniform.glb"
  const cone = "vr_src/football_club/cone.glb"
  const trophy = "/vr_src/football_club/trophy.glb"
  const footballposter = "/vr_src/football_club/footballclub.png";
  const ball = "/vr_src/football_club/football.glb"
  const footballtable="/vr_src/football_club/football_Gambling.glb"
  //로봇제어계측 동아리
  const mechanic_arm = "vr_src/mechanic_club/mechanic_arm.glb"
  const drone = "vr_src/mechanic_club/drone.glb"
  const drone2 = "vr_src/mechanic_club/drone2.glb"
  const tool_box = "vr_src/mechanic_club/tool_box.glb"
  const controller = "vr_src/mechanic_club/controller.glb"
  const highrowposter = "vr_src/mechanic_club/highrow.jpg"
  //술 동아리
  const alcohol_set = "vr_src/alcohol/bottle_set_alcohol.glb"
  const wine = "vr_src/alcohol/wine.glb"
  const oak = "vr_src/alcohol/oak.glb"
  const certificate = "vr_src/alcohol/certificate.glb"
  const alcoholposter = "vr_src/alcohol/alcoholposter.jpg"
  //주식 동아리
  const chart = "vr_src/stockclub/chart.glb"
  const boxes = "vr_src/stockclub/boxes.glb"
  const file = "vr_src/stockclub/file.glb"

  return (
    <>

    {/* 보드게임 동아리 */}
    {category === "boardgame" && 
    <>
      <a-entity gltf-model={`url(${monopoly})`} 
                position={`8.8 1 ${3.5-(15*index)}`}
                scale="0.001 0.001 0.001"
                rotation="0 -90 0">
      </a-entity>
      <a-entity gltf-model={`url(${boardgame})`} 
                position={`8.5 1.2 ${6-(15*index)}`}
                scale="0.5 0.5 0.5"
                rotation="0 0 0">
      </a-entity>
      <a-image src={applicationForm}
              position={`8.8 1 ${-0.5-(15*index)}`}
              width="0.84" 
              height="1.2"
              rotation="-90 -90 0"
              link-to="url: /cbDescription">
      </a-image>
      <a-image src={boardgamePoster}
              position={`5.05 1.05 ${6.5-(15*index)}`}
              width="0.84" 
              height="1.2"
              rotation="-15 -90 0">
      </a-image>
    </>
    }

    {/* 독서 동아리 */}
    {category === "reading" && 
    <>
      <a-entity gltf-model={`url(${books1})`} 
                  position={`8.8 1 ${5-(15*index)}`}
                  scale="1 1 1"
                  rotation="0 180 0">
      </a-entity>
      <a-entity gltf-model={`url(${books2})`} 
                  position={`8.5 1 ${3.5-(15*index)}`}
                  scale="0.1 0.1 0.1"
                  rotation="0 0 0">
      </a-entity>
      <a-image src={applicationForm}
                    position={`8.8 1 ${-0.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-90 -90 0"
                    link-to="url: /cbDescription">
      </a-image>
      <a-image src={readingPoster}
                    position={`5.05 1.05 ${6.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 -90 0">
      </a-image>
    </>
    }

    {/* 사진 동아리 */}
    {category === "photography" && 
    <>
      <a-entity gltf-model={`url(${picture1})`} 
                position={`8.55 1.25 ${5.5-(15*index)}`}
                scale="0.3 0.3 0.3"
                rotation="-15 -90 0">
      </a-entity>
      <a-entity gltf-model={`url(${picture2})`} 
                position={`8.55 1.4 ${4.5-(15*index)}`}
                scale="2 2 2"
                rotation="-30 0 0">
      </a-entity>
      <a-entity gltf-model={`url(${camera})`} 
                position={`8.5 1.1 ${3.5-(15*index)}`}
                scale="0.5 0.5 0.5"
                rotation="0 150 0">
      </a-entity>
      <a-entity gltf-model={`url(${box})`} 
                position={`9 1 ${5-(15*index)}`}
                scale="1.5 1.5 1.5"
                rotation="0 -90 0">
      </a-entity>
      <a-image src={applicationForm}
                  position={`8.8 1 ${-0.5-(15*index)}`}
                  width="0.84" 
                  height="1.2"
                  rotation="-90 -90 0"
                  link-to="url: /cbDescription">
      </a-image>
      <a-image src={photographyPoster}
                  position={`5.05 1.05 ${6.5-(15*index)}`}
                  width="0.84" 
                  height="1.2"
                  rotation="-15 -90 0">
      </a-image>
    </>
    }

    {/* 밴드 동아리 */}
    {category === "band" &&
      <>
        <a-entity gltf-model={`url(${microphone})`} 
                  position={`6.5 0.1 ${5.5-(15*index)}`}
                  scale="0.3 0.3 0.3"
                  rotation="0 -90 0">
        </a-entity>
        <a-entity gltf-model={`url(${guitar})`} 
                  position={`9 1.0 ${5.5-(15*index)}`}
                  scale="0.015 0.015 0.015"
                  rotation="0 -45 0">
        </a-entity>
        <a-entity gltf-model={`url(${drum})`} 
                  position={`6 0.1 ${3.5-(15*index)}`}
                  scale="1 1 1"
                  rotation="0 -90 0">
        </a-entity>
        <a-image src={applicationForm}
                    position={`8.8 1 ${-0.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-90 -90 0"
                    link-to="url: /cbDescription">
        </a-image>
        <a-image src={bandPoster}
                    position={`5.05 1.05 ${6.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 -90 0">
        </a-image>
      </>
    }

    {/* 등산 동아리 */}
    {category === "climbing" &&
      <>
        <a-entity gltf-model={`url(${backpack})`} 
                  position={`8.7 1.1 ${6-(15*index)}`}
                  scale="0.15 0.15 0.15"
                  rotation="0 90 -90">
        </a-entity>
        <a-entity gltf-model={`url(${hat})`} 
                  position={`8.5 -1.5 ${4.7-(15*index)}`}
                  scale="0.0015 0.0015 0.0015"
                  rotation="0 -90 0">
        </a-entity>
        <a-entity gltf-model={`url(${mountain})`} 
                  position={`8.7 1.1 ${3.5-(15*index)}`}
                  scale="0.0005 0.0005 0.0005"
                  rotation="0 -90 0">
        </a-entity>
        <a-image src={applicationForm}
                    position={`8.8 1 ${-0.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-90 -90 0"
                    link-to="url: /cbDescription">
        </a-image>
        <a-image src={climbingPoster}
                    position={`5.05 1.05 ${6.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 -90 0">
        </a-image>
      </>
    }

    {/* 여행 동아리 */}
    {category === "traver" && 
      <>
        {/* 텐트, 그릴, 지도 넣기 */}
        <a-image src={applicationForm}
                    position={`-8.8 1 ${4.5-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-90 90 0"
                    link-to="url: /cbDescription">
        </a-image>
        <a-image src={traverPoster}
                    position={`-5.05 1.05 ${-2-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 90 0">
        </a-image>
      </>
    }

    {category === "football" &&
      <>
        {/* 축구 동아리 포스터 */}
        <a-image src={footballposter} 
                    position={`-5 1 ${-2-(15*index)}`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 90 0">
        </a-image>
        {/* 축구게임테이블 */}
        <a-entity gltf-model={`url(${footballtable})`} 
          position={`-5 0.6 ${0-(15*index)}`}
          scale="0.3 0.3 0.3"
          rotation="0 -90 0"></a-entity>
        {/* 축구공 */}
        <a-entity gltf-model={`url(${ball})`} 
        position={`-5 0.2 ${2-(15*index)}`}
        scale="1.5 1.5 1.5"
        rotation="0 -90 0"></a-entity>
        {/* 트로피 */}
        <a-entity gltf-model={`url(${trophy})`} 
        position={`-9 1 ${0-(15*index)}`}
        scale="0.3 0.3 0.3"
        rotation="0 -90 0"></a-entity>
        <a-entity gltf-model={`url(${trophy})`} 
        position={`-9 1 ${-0.5-(15*index)}`}
        scale="0.3 0.3 0.3"
        rotation="0 -90 0"></a-entity>
        <a-entity gltf-model={`url(${footballshoes})`} 
        position={`-6 0.5 ${1-(15*index)}`}
        scale="1.5 1.5 1.5"
        rotation="0 -90 0"></a-entity>
        <a-entity gltf-model={`url(${football_set})`} 
        position={`-6 0.5 ${-4-(15*index)}`}
        rotation="0 90 0"></a-entity>
        <a-entity gltf-model={`url(${soccer_uniform})`} 
        position={`-9 1.2 ${-2-(15*index)}`}
        rotation="0 180 0"></a-entity>
        <a-entity gltf-model={`url(${cone})`} 
        position={`-6 0.2 ${1.7-(15*index)}`}
        scale="0.1 0.1 0.1"
        rotation="0 -90 0"></a-entity>
      </>
    }

    {category === "mechanic"&&
      <>
        {/* 로봇 동아리 포스터 */}
        <a-image  src={highrowposter} 
                  position={`-5 1 ${-2-(15*index)}`}
                  width="0.84" 
                  height="1.2"
                  rotation="-15 90 0">
        </a-image>
        {/*로봇팔*/}
        <a-entity gltf-model={`url(${mechanic_arm})`} 
                  position={`-9.5 1 ${-0.5-(15*index)}`}
                  scale="0.3 0.3 0.3"
                  rotation="0 -90 0"></a-entity>
        {/*드론*/}
        <a-entity gltf-model={`url(${drone})`} 
                  position={`-8.5 1 ${-0.5-(15*index)}`}
                  scale="0.4 0.4 0.4"
                  rotation="0 -90 0"></a-entity>
        {/*드론2*/}
        <a-entity gltf-model={`url(${drone2})`} 
                  position={`-8.6 1.2 ${0-(15*index)}`}
                  scale="0.025 0.025 0.025"
                  rotation="0 -90 0"></a-entity>
        
        <a-entity gltf-model={`url(${tool_box})`} 
                  position={`-7.3 -1.6 ${-4.8-(15*index)}`}
                  scale="0.7 0.7 0.7"></a-entity>
        <a-entity gltf-model={`url(${controller})`} 
                  position={`-8 1 -13`}></a-entity>
      </>
    }
    {/* 술동아리 */}
    {category === "alcohol" &&
      <>
      {/* 술 동아리 포스터 */}
        <a-image  src={alcoholposter} 
                  position={`-5 1 ${-2-(15*index)}`}
                  width="0.84" 
                  height="1.2"
                  rotation="-15 90 0"></a-image>
        {/* 술테이블 */}
        <a-entity gltf-model={`url(${alcohol_set})`} 
                  position={`-5 1 ${0.3-(15*index)}`}
                  scale = "0.015 0.015 0.015"
                  rotation ="0 -90 0"></a-entity>
        {/* 와인 */}
        <a-entity gltf-model={`url(${wine})`} 
                  position={`-8.4 1 ${0-(15*index)}`}
                  scale = "0.03 0.03 0.03"
                  rotation ="0 90 0"></a-entity>
        {/* 오크통 */}
        <a-entity gltf-model={`url(${oak})`} 
                  position={`-8.1 1.6 ${-2-(15*index)}`}
                  scale="0.4 0.4 0.4"
                  rotation="0 90 0"></a-entity>
        {/* 자격증 */}
        <a-entity gltf-model={`url(${certificate})`}
                  position={`-9 1 ${-0.5-(15*index)}`}
                  scale = "0.0015 0.0015 0.0015"
                  rotation ="-20 90 0"></a-entity>
      </>
    }
    {/* 주식동아리 */}
    {category === "stock" &&
      <>
        {/* 주식 동아리 포스터 */}
        <a-image  src={alcoholposter} 
                  position={`-5 1 ${-2-(15*index)}`}
                  width="0.84" 
                  height="1.2"
                  rotation="-15 90 0"></a-image>
        {/* 차트 */}
        <a-entity gltf-model={`url(${chart})`}
                  position={`-9.3 1.7 ${-0.5-(15*index)}`}
                  rotation ="0 90 0"
                  scale = "1.8 1.45 1.5"></a-entity>
        {/* 서류박스 */}
        <a-entity gltf-model={`url(${boxes})`} 
                  position={`-5 0 ${0.3-(15*index)}`}
                  rotation ="0 -90 0"
                  scale ="1.3 1.2 1.2"></a-entity>
        {/* 서류 */}
        <a-entity gltf-model={`url(${file})`} 
                  position={`-8.4 1 ${0-(15*index)}`}
                  scale = "0.3 0.3 0.3"
                  rotation ="0 90 0"></a-entity>
      </>
    }
    </>
  ) 
}