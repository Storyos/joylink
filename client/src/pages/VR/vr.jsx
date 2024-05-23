import React from "react";
import "aframe";
import "aframe-particle-system-component";
import "aframe-extras";
import AFRAME from 'aframe';

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

export default function Vr() {
  const tent = "Commercial_Tent_4x4_Meters.glb"
  const sakura ="/sakura_tree.glb";
  const grassImgPath ="/grass.jpg";
  const easel = "/easel.glb";
  const stone = "/stone_ground.glb";
  const poster = "/example_poster.png";

  const CountCherryBlossom = Array.from({length: 10}, () => 0); // 벚꽃나무 이미지 좌우 10세트 배열로 표현
  const CountGrass = Array.from({length: 13}, () => 0); // 풀밭 이미지 13세트 배열로 표현
  const CountStone = Array.from({length: 4}, () => 0);
  const tentline = Array.from({length: 5}, () => 0);

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 카메라 */}
        <a-camera 
        jump = "height: 1; duration: 400"
        boundary-constraint="minX: -10; maxX: 10; minZ: -70; maxZ: 7"
        position="0 1.6 0"
        look-controls="enabled:true" 
        wasd-controls="acceleration: 30">
        </a-camera>

        {/* 하늘 */}
        <a-sky color="#9CCEFF"></a-sky>
        
        {/* 풀밭 이미지 */}
        {CountGrass.map((_, index)=>(
          <> 
            <a-image src={grassImgPath} 
                    position={`0 0 ${4.5-(6*index)}`}
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`6 0 ${4.5-(6*index)}`}
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`-6 0 ${4.5-(6*index)}`} 
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`12 0 ${4.5-(6*index)}`}
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`-12 0 ${4.5-(6*index)}`} 
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
          </>
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
        
        {/* 포스터 */}
        <a-image src={poster} 
                    position={`-5 1 -2`}
                    width="0.84" 
                    height="1.2"
                    rotation="-15 90 0">
        </a-image>
        
        {/* 벚꽃나무 */}
        {CountCherryBlossom.map((_, index)=>(
          <a-entity gltf-model={`url(${sakura})`} 
          position={`-12 0 ${6-(index*8)}`}
          scale="30 30 30"
          rotation={`0 ${60*index}  0`}></a-entity>
        ))}
        {CountCherryBlossom.map((_, index)=>(
          <a-entity gltf-model={`url(${sakura})`} 
          position={`12 0 ${6-(index*8)}`}
          scale="30 30 30"
          rotation={`0 ${60*index}  0`}></a-entity>
        ))}
        
        {/* 돌바닥 */}
        {CountStone.map((_, index) => (
          <>
            <a-entity gltf-model={`url(${stone})`} 
                      position={`-5.35 -0.6 ${-2.2-(19.84*index)}`}
                      scale="2.7 2.5 2.5"
                      rotation="0 0 0">
            </a-entity>
            <a-entity gltf-model={`url(${stone})`} 
                      position={`5.4 -0.6 ${-2.6-(19.84*index)}`}
                      scale="2.7 2.5 2.5"
                      rotation="0 180 0">
            </a-entity>
          </>
        ))}
          
      </a-scene>
    </div>
  );
}
