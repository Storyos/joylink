export default function ClubModels ({ category, index }) {

  const applicationForm = "/vr_src/application_form.png";

  // 보드게임 동아리
  const monopoly = "vr_src/boardgame_club/monopoly.glb";
  const boardgame = "vr_src/boardgame_club/boardgame.glb";
  const boardgamePoster = "vr_src/boardgame_club/boardgame_poster.png";

  // 독서 동아리
  const books1 = "vr_src/reading_club/books1.glb";
  const books2 = "vr_src/reading_club/books2.glb";
  const readingPoster = "vr_src/reading_club/reading_poster.png";

  // 사진 동아리
  const picture1 = "vr_src/photography_club/picture1.glb";
  const picture2 = "vr_src/photography_club/picture2.glb";
  const camera = "vr_src/photography_club/camera.glb";
  const box = "vr_src/photography_club/box.glb";
  const photographyPoster = "vr_src/photography_club/photography_poster.png";

  // 밴드 동아리
  const microphone = "vr_src/band_club/microphone.glb";
  const guitar = "vr_src/band_club/guitar.glb";
  const drum = "vr_src/band_club/drum.glb";
  const bandPoster = "vr_src/band_club/band_poster.png";

  // 등산 동아리
  const backpack = "vr_src/climbing_club/backpack.glb";
  const hat = "vr_src/climbing_club/hat.glb";
  const mountain = "vr_src/climbing_club/mountain.glb";
  const water = "vr_src/climbing_club/water.glb";
  const climbingPoster = "vr_src/climbing_club/climbing_poster.png";

  // 여행 동아리
  const traverTent = "vr_src/traver_club/traver_tent.glb";
  const grill = "vr_src/traver_club/grill.glb";
  const map = "vr_src/traver_club/korean_map.png";
  const steak1 = "vr_src/traver_club/steak1.glb";
  const steak2 = "vr_src/traver_club/steak2.glb";
  const traverPoster = "vr_src/traver_club/traver_poster.png";

  // 축구동아리 소스
  const footballshoes = "vr_src/football_club/football_shoes.glb"
  const football_set="vr_src/football_club/football_set.glb"
  const soccer_uniform = "vr_src/football_club/soccer_uniform.glb"
  const cone = "vr_src/football_club/cone.glb"
  const trophy = "/vr_src/football_club/trophy.glb"
  const footballposter = "/vr_src/football_club/footballclub.png";
  const ball = "/vr_src/football_club/football.glb"
  const footballtable="/vr_src/football_club/football_Gambling.glb"
  const footballbenner="vr_src/football_club/footballbenner.png"
  const footballbenner2="vr_src/football_club/footballbenner2.png"
  //로봇제어계측 동아리
  const mechanic_arm = "vr_src/mechanic_club/mechanic_arm.glb"
  const drone = "vr_src/mechanic_club/drone.glb"
  const drone2 = "vr_src/mechanic_club/drone2.glb"
  const tool_box = "vr_src/mechanic_club/tool_box.glb"
  const controller = "vr_src/mechanic_club/controller.glb"
  const highrowposter = "vr_src/mechanic_club/highrow.jpg"
  const highrowbanner = "vr_src/mechanic_club/highrowbanner.png"
  const highrowbanner2 = "vr_src/mechanic_club/highrowbanner2.png"
  //술 동아리
  const alcohol_set = "vr_src/alcohol/bottle_set_alcohol.glb"
  const wine = "vr_src/alcohol/wine.glb"
  const oak = "vr_src/alcohol/oak.glb"
  const certificate = "vr_src/alcohol/certificate.glb"
  const alcoholposter = "vr_src/alcohol/alcoholposter.jpg"
  const alcoholbanner = "vr_src/alcohol/alcoholbanner.png"
  const alcoholbanner2 = "vr_src/alcohol/alcoholbanner2.png"
  //주식 동아리
  const chart = "vr_src/stockclub/chart.glb"
  const boxes = "vr_src/stockclub/boxes.glb"
  const file = "vr_src/stockclub/file.glb"
  const stockposter = "vr_src/stockclub/stockposter.jpg"

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
        <a-entity gltf-model={`url(${water})`} 
                  position={`9.2 1 ${6.2-(15*index)}`}
                  scale="2 2 2"
                  rotation="0 0 0">
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
        <a-image src={footballbenner} 
                    position={`-5.4 2.6 ${-0.4-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-image src={footballbenner} 
                    position={`-5.4 2.6 ${4.45-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-entity gltf-model={`url(${traverTent})`} 
                  position={`-7 0.8 ${1-(15*index)}`}
                  scale="1 1 1"
                  rotation="0 0 0">
        </a-entity>
        <a-entity gltf-model={`url(${grill})`} 
                  position={`-7.2 0.2 ${-2-(15*index)}`}
                  scale="0.008 0.008 0.008"
                  rotation="0 0 0">
        </a-entity>
        <a-entity gltf-model={`url(${water})`} 
                  position={`-9 1 ${0.5-(15*index)}`}
                  scale="2 2 2"
                  rotation="0 0 0">
        </a-entity>
        <a-entity gltf-model={`url(${steak1})`} 
                  position={`-8.3 1 ${-1.5-(15*index)}`}
                  scale="1.5 1.5 1.5"
                  rotation="0 0 0">
        </a-entity>
        <a-entity gltf-model={`url(${steak2})`} 
                  position={`-8.3 1 ${-1-(15*index)}`}
                  scale="0.05 0.05 0.05"
                  rotation="-35 0 0">
        </a-entity>
        <a-image src={map}
                    position={`-8.8 0.95 ${0.5-(15*index)}`}
                    width="0.84"
                    height="1.2"
                    rotation="-90 90 0">
        </a-image>
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

    {/* 축구동아리 */}
    {category === "football" &&
      <>
      {/* 축구동아리 베너 */}
        <a-image src={footballbenner} 
                    position={`-5.4 2.6 ${-0.4-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-image src={footballbenner2} 
                    position={`-5.4 2.6 ${4.45-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        {/* 축구 동아리 포스터 */}
        <a-image src={footballposter} 
                    position={`-5 1 ${-2-(15*index)}`}
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
    {/* 로봇제어계측 동아리 */}
    {category === "mechanic"&&
      <>
        <a-image src={highrowbanner} 
                    position={`-5.4 2.6 ${-0.4-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-image src={highrowbanner2} 
                    position={`-5.4 2.6 ${4.45-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
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
        <a-image src={alcoholbanner} 
                    position={`-5.4 2.6 ${-0.4-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-image src={alcoholbanner2} 
                    position={`-5.4 2.6 ${4.45-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
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
        <a-image src={footballbenner} 
                    position={`-5.4 2.6 ${-0.4-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        <a-image src={footballbenner} 
                    position={`-5.4 2.6 ${4.45-(15*index)}`}
                    height="0.7px"
                    width="4.8px"
                    rotation="0 90 0">
        </a-image>
        {/* 주식 동아리 포스터 */}
        <a-image  src={stockposter} 
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