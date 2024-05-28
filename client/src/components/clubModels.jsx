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

    </>
  ) 
}