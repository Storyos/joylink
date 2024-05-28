import React from "react";
import "aframe";
import "aframe-particle-system-component";
import "aframe-extras";
import AFRAME from 'aframe';
import ClubModels from "../../components/clubModels";

// 카메라 이동 범위 제한하는 컴포넌트 등록
AFRAME.registerComponent('boundary-constraint', {
  schema: {
    minX: { type: 'number', default: -5 },
    maxX: { type: 'number', default: 5 },
    minZ: { type: 'number', default: -5 },
    maxZ: { type: 'number', default: 5 }
  },
  init: function () {
    this.cameraEl = this.el.sceneEl.camera.el; // 카메라 요소를 참조
  },
  tick: function () {
    var position = this.cameraEl.getAttribute('position');
    var data = this.data; // schema 데이터를 가져옴

    // 경계를 벗어나는지 확인하고 벗어난다면 위치를 조정
    if (position.x < data.minX) position.x = data.minX;
    if (position.x > data.maxX) position.x = data.maxX;
    if (position.z < data.minZ) position.z = data.minZ;
    if (position.z > data.maxZ) position.z = data.maxZ;

    // 위치를 업데이트
    this.cameraEl.setAttribute('position', position);
  }
});

// 점프 컴포넌트
AFRAME.registerComponent('jump', {
  schema: {
    height: { type: 'number', default: 1 }, // 점프 높이
    duration: { type: 'number', default: 300 } // 점프 지속 시간 (밀리초)
  },
  init: function () {
    this.isJumping = false;
    this.jumpStart = null;
    this.startY = 0;
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  },
  onKeyDown: function (event) {
    if (event.code === 'Space' && !this.isJumping) {
      this.isJumping = true;
      this.jumpStart = Date.now();
      this.startY = this.el.getAttribute('position').y;
    }
  },
  tick: function () {
    if (!this.isJumping) return;

    const now = Date.now();
    const progress = (now - this.jumpStart) / this.data.duration;
    const position = this.el.getAttribute('position');

    if (progress < 0.5) {
      position.y = this.startY + this.data.height * (progress * 2); // 상승
    } else if (progress < 1) {
      position.y = this.startY + this.data.height * (2 - progress * 2); // 하강
    } else {
      position.y = this.startY;
      this.isJumping = false;
    }

    this.el.setAttribute('position', position);
  }
});

AFRAME.registerComponent('link-to', {
  schema: {
    url: { type: 'string' }
  },
  init: function () {
    this.el.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      window.location.href = this.data.url;
    });
  }
});

export default function Vr() {
  
  const footballtable="/vr_src/football_table.glb"
  const table ="/vr_src/folding_table.glb"
  const tent = "/vr_src/Commercial_Tent_4x4_Meters.glb"
  const sakura ="/vr_src/sakura_tree.glb";
  const grassImgPath ="/vr_src/grass.jpg";
  const easel = "/vr_src/easel.glb";
  const stone = "/vr_src/stone_ground.glb";
  const footballposter = "/vr_src/footballclub.png";
  const ball = "/vr_src/Football.glb"
  const arcitechture1 = "/vr_src/arcitechture1.png";
  const arcitechture2 = "/vr_src/arcitechture2.png"; 

  const CountCherryBlossom = Array.from({length: 23}, () => 0);
  const CountGrassX = Array.from({length: 30}, () => 0);
  const CountGrassZ = Array.from({length: 17}, () => 0);
  const CountStone = Array.from({length: 9}, () => 0);
  const tentline = Array.from({length: 5}, () => 0);

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 카메라 */}
        <a-camera 
        jump = "height: 0.5; duration: 400"
        boundary-constraint="minX: -10; maxX: 10; minZ: -70; maxZ: 7"
        position="0 1.6 -60"
        look-controls="enabled:true" 
        wasd-controls="acceleration: 20">
        </a-camera>

        {/* 마우스 커서 */}
        <a-entity cursor="fuse: false; rayOrigin: mouse"></a-entity>
        
        {/* 하늘 */}
        <a-sky color="#9CCEFF"></a-sky>
        
        {/* 건물 이미지*/}
        <a-image src={arcitechture1}
                    position={`-50 50 -45`}
                    width="300" 
                    height="100"
                    rotation="0 90 0">
        </a-image>
        <a-image src={arcitechture2}
                    position={`50 40 -45`}
                    width="240" 
                    height="80"
                    rotation="0 -90 0">
        </a-image>
        
        {/* 풀밭 이미지 */}
        {CountGrassX.map((_, XIndex)=>(
          CountGrassZ.map((_, ZIndex)=>(
            <a-image src={grassImgPath} 
                    position={`${-48+(6*ZIndex)} 0 ${60-(6*XIndex)}`} 
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
          ))
        ))}
        
        {/* 동아리 부스 */}
        {tentline.map((_, index)=>(
          <a-entity gltf-model={`url(${tent})`} 
          position={`-8 0 ${2-(index*15)}`}
          scale="1.2 1.2 1.2"
          rotation="0 -90 0"></a-entity>
        ))}
        {tentline.map((_, index)=>(
          <a-entity gltf-model={`url(${tent})`} 
          position={`8 0 ${2-(index*15)}`}
          scale="1.2 1.2 1.2"
          rotation="0 -90 0"></a-entity>
        ))}
        
        {/* 이젤 */}
        {tentline.map((_, index)=>(
          <a-entity id="easel" 
                  gltf-model={`url(${easel})`}
                  scale = "0.3 0.3 0.3"
                  position={`-5 0 ${-2-(index*15)}`}
                  rotation="0 -90 0" >
          </a-entity>
        ))}
        {tentline.map((_, index)=>(
          <a-entity id="easel" 
                  gltf-model={`url(${easel})`}
                  scale = "0.3 0.3 0.3"
                  position={`5 0 ${6.5-(index*15)}`}
                  rotation="0 90 0" >
          </a-entity>
        ))}
        
        {/* 벚꽃나무 */}
        {CountCherryBlossom.map((_, index)=>(
          <a-entity gltf-model={`url(${sakura})`} 
          position={`-12 0 ${60-(index*8)}`}
          scale="30 30 30"
          rotation={`0 ${60*index}  0`}></a-entity>
        ))}
        {CountCherryBlossom.map((_, index)=>(
          <a-entity gltf-model={`url(${sakura})`} 
          position={`12 0 ${60-(index*8)}`}
          scale="30 30 30"
          rotation={`0 ${60*index}  0`}></a-entity>
        ))}
        
        {/* 돌바닥 */}
        {CountStone.map((_, index) => (
          <>
            <a-entity gltf-model={`url(${stone})`} 
                      position={`-5.35 -0.6 ${60.3-(19.84*index)}`}
                      scale="2.7 2.5 2.5"
                      rotation="0 0 0">
            </a-entity>
            <a-entity gltf-model={`url(${stone})`} 
                      position={`5.4 -0.6 ${60-(19.84*index)}`}
                      scale="2.7 2.5 2.5"
                      rotation="0 180 0">
            </a-entity>
          </>
        ))}
        {tentline.map((_, index)=>(
          <>
          <a-entity gltf-model={`url(${table})`} 
          position={`9 0.5 ${4.5-(index*15)}`}
          scale="2.5 1.1 2.8"
          rotation="0 90 0"
          ></a-entity> 
          <a-entity gltf-model={`url(${table})`} 
          position={`9 0.5 ${-0.5-(index*15)}`}
          scale="2.5 1.1 2.8"
          rotation="0 90 0"
          ></a-entity></>
        ))} 
        {tentline.map((_, index)=>(
          <>
          <a-entity gltf-model={`url(${table})`} 
          position={`-9 0.5 ${4.5-(index*15)}`}
          scale="2.5 1.1 2.8"
          rotation="0 90 0"
          ></a-entity> 
          <a-entity gltf-model={`url(${table})`} 
          position={`-9 0.5 ${-0.5-(index*15)}`}
          scale="2.5 1.1 2.8"
          rotation="0 90 0"
          ></a-entity></>
        ))}
        {/*축구 동아리*/}
        {/* 축구 동아리 포스터 */}
        <a-image src={footballposter} 
                    position={`-5 1 -2`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 90 0">
        </a-image>
        {/* 축구게임테이블 */}
        <a-entity gltf-model={`url(${footballtable})`} 
          position={`-5 0.7 0`}
          scale="0.02 0.02 0.02"
          rotation="0 -90 0"></a-entity>
        {/* 축구공 */}
        <a-entity gltf-model={`url(${ball})`} 
        position={`-5 0.2 3`}
        // scale="0.003 0.003 0.003"
        rotation="0 -90 0"></a-entity>

        {/* 보드게임 동아리 */}
        <ClubModels category="boardgame" index={0}/>
        
        {/* 독서 동아리 */}
        <ClubModels category="reading" index={1}/>
        
        {/* 사진 동아리 */}
        <ClubModels category="photography" index={2}/>
        
        {/* 밴드 동아리 */}
        <ClubModels category="band" index={3}/>
        
        {/* 등산 동아리 */}
        <ClubModels category="climbing" index={4}/>
        
        {/* 여행 동아리 */}
        <ClubModels category="traver" index={4}/>

      </a-scene>
    </div>
  );
}
