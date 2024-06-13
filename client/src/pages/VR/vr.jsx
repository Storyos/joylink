import React from "react";
import "aframe";
import "aframe-particle-system-component";
import "aframe-extras";
import AFRAME from 'aframe';
import ClubModels from "../../components/clubModels";
import { useState, useEffect } from "react";

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

// 신청서 클릭시 동아리 소개 페이지 팝업
AFRAME.registerComponent('link-to', {
  schema: {
    url: { type: 'string' }
  },
  init: function () {
    this.el.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      // window.location.href = this.data.url;
      window.open(`${this.data.url}`)
    });
  }
});

// 객체 풀링 시스템 정의
class ObjectPool {
  constructor(createFn, size) {
    this.createFn = createFn;
    this.pool = [];
    for (let i = 0; i < size; i++) {
      this.pool.push(this.createFn());
    }
  }

  acquire() {
    return this.pool.length > 0 ? this.pool.pop() : this.createFn();
  }

  release(obj) {
    this.pool.push(obj);
  }
}

const sakuraPool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "",
  scale: "30 30 30",
  src: "/vr_src/sakura_tree.glb"
}), 30);

const grassPool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "90 90 0",
  width: "6",
  height: "6",
  src: "/vr_src/grass.jpg"
}), 300);

const tablePool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "0 90 0",
  scale: "2.5 1.1 2.8",
  src: "/vr_src/folding_table.glb"
}), 20);

const tentPool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "0 -90 0",
  scale: "1.2 1.2 1.2",
  src: "/vr_src/Commercial_Tent_4x4_Meters.glb"
}), 20);

const easelPool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "",
  scale: "0.3 0.3 0.3",
  src: "/vr_src/easel.glb"
}), 10);

const stonePool = new ObjectPool(() => ({
  key: Math.random(),
  position: "",
  rotation: "",
  scale: "2.7 2.5 2.5",
  src: "/vr_src/stone_ground.glb"
}), 20);


export default function Vr() {
  
  const table ="/vr_src/folding_table.glb"
  const tent = "/vr_src/Commercial_Tent_4x4_Meters.glb"
  const sakura ="/vr_src/sakura_tree.glb";
  const grassImgPath ="/vr_src/grass.jpg";
  const easel = "/vr_src/easel.glb";
  const stone = "/vr_src/stone_ground.glb";
  const arcitechture1 = "/vr_src/arcitechture1.png";
  const arcitechture2 = "/vr_src/arcitechture2.png"; 

  // 객체 풀에서 필요한 만큼 가져오기
  const [sakuraEntities, setSakuraEntities] = useState([]);
  const [grassEntities, setGrassEntities] = useState([]);
  const [tableEntities, setTableEntities] = useState([]);
  const [tentEntities, setTentEntities] = useState([]);
  const [easelEntities, setEaselEntities] = useState([]);
  const [stoneEntities, setStoneEntities] = useState([]);

  useEffect(() => {
    const sakuraTemp = [];
    const grassTemp = [];
    const tableTemp = [];
    const tentTemp = [];
    const easelTemp = [];
    const stoneTemp = [];
    
    for (let i = 0; i < 23; i++) {
      for (let j = 0; j < 2; j++) {
        const entity = sakuraPool.acquire();
        entity.position = j === 0 ? `-12 0 ${60 - (i * 8)}` : `12 0 ${60 - (i * 8)}`;
        entity.rotation = `0 ${60 * i} 0`;
        sakuraTemp.push(entity);
      }
    }
    setSakuraEntities(sakuraTemp);

    for (let x = 0; x < 30; x++) {
      for (let z = 0; z < 17; z++) {
        const entity = grassPool.acquire();
        entity.position = `${-48+(6*z)} 0 ${60-(6*x)}`; 
        grassTemp.push(entity);
      }
    }
    setGrassEntities(grassTemp);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        const entity = tablePool.acquire();
        entity.position = j === 0 ? `9 0.5 ${4.5-(i*15)}` : `9 0.5 ${-0.5-(i*15)}`;
        tableTemp.push(entity);
      }
      for (let j = 0; j < 2; j++) {
        const entity = tablePool.acquire();
        entity.position = j === 0 ? `-9 0.5 ${4.5-(i*15)}` : `-9 0.5 ${-0.5-(i*15)}`;
        tableTemp.push(entity);
      }
    }
    setTableEntities(tableTemp);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        const entity = tentPool.acquire();
        entity.position = j === 0 ? `-8 0 ${2-(i*15)}` : `8 0 ${2-(i*15)}`;
        tentTemp.push(entity);
      }
    }
    setTentEntities(tentTemp);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        const entity = easelPool.acquire();
        entity.position = j === 0 ? `-5 0 ${-2-(i*15)}` : `5 0 ${6.5-(i*15)}`;
        entity.rotation = j === 0 ? `0 -90 0` : `0 90 0`;
        easelTemp.push(entity);
      }
    }
    setEaselEntities(easelTemp);

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 2; j++) {
        const entity = stonePool.acquire();
        entity.position = j === 0 ? `-5.35 -0.6 ${60.3-(19.84*i)}` : `5.4 -0.6 ${60-(19.84*i)}`;
        stoneTemp.push(entity);
      }
    }
    setStoneEntities(stoneTemp);
  }, []);

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <h1>vr 페이지 입니다</h1>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 카메라 */}
        <a-camera 
        jump = "height: 0.5; duration: 400"
        boundary-constraint="minX: -10; maxX: 10; minZ: -70; maxZ: 7"
        position="0 1.6 6"
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
        {grassEntities.map((entity, index) => (
          <a-image 
            key={entity.key}
            src={entity.src} 
            position={entity.position} 
            width={entity.width} 
            height={entity.height} 
            rotation={entity.rotation}>
          </a-image>
        ))}
        
        {/* 동아리 부스 */}
        {tentEntities.map((entity, index) => (
          <a-entity 
            key={entity.key}
            gltf-model={`url(${entity.src})`}
            position={entity.position}
            scale={entity.scale}
            rotation={entity.rotation}>
          </a-entity>
        ))}
        
        {/* 이젤 */}
        {easelEntities.map((entity, index) => (
          <a-entity 
            key={entity.key}
            gltf-model={`url(${entity.src})`}
            position={entity.position}
            scale={entity.scale}
            rotation={entity.rotation}>
          </a-entity>
        ))}
        
        {/* 벚꽃나무 */}
        {sakuraEntities.map((entity, index) => (
          <a-entity 
            key={entity.key}
            gltf-model={`url(${entity.src})`}
            position={entity.position}
            scale={entity.scale}
            rotation={entity.rotation}>
          </a-entity>
        ))}
        
        {/* 돌바닥 */}
        {stoneEntities.map((entity, index) => (
          <a-entity 
            key={entity.key}
            gltf-model={`url(${entity.src})`}
            position={entity.position}
            scale={entity.scale}
            rotation={entity.rotation}>
          </a-entity>
        ))}


        {/* 테이블 */}
        {tableEntities.map((entity, index) => (
          <a-entity 
            key={entity.key}
            gltf-model={`url(${entity.src})`}
            position={entity.position}
            scale={entity.scale}
            rotation={entity.rotation}>
          </a-entity>
        ))}
        
        {/* 보드게임 동아리 */}
        <ClubModels category="boardgame" index={0}/>
        {/* 축구 동아리 */}
        <ClubModels category="football" index={0}/>
        
        {/* 독서 동아리 */}
        <ClubModels category="reading" index={1}/>
        
        {/* 사진 동아리 */}
        <ClubModels category="photography" index={3}/>
        
        {/* 밴드 동아리 */}
        <ClubModels category="band" index={2}/>
        
        {/* 주식 동아리 */}
        <ClubModels category="stock" index={3}/>

        {/* 등산 동아리 */}
        <ClubModels category="climbing" index={4}/>
        
        {/* 로봇 제어 계측 동아리 */}
        <ClubModels category="mechanic" index={1}/>
        
        {/* 술 동아리 */}
        <ClubModels category="alcohol" index={2}/>
        
        {/* 여행 동아리 */}
        <ClubModels category="traver" index={4}/>
        
        {/*사람오브젝트*/}
        <ClubModels category="people"/>
      </a-scene>
    </div>
  );
}
