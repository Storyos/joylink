import React, { useEffect, useRef } from "react";
import "aframe";
import "aframe-particle-system-component";
import "aframe-extras";

export default function Vr() {
  const tent = "Commercial_Tent_4x4_Meters.glb"
  const sakura ="/sakura_tree.glb";
  const grassImgPath ="/grass.jpg";
  const easel = "/easel.glb";
  const stone = "/stone_ground.glb";

  const CountCherryBlossom = Array.from({length: 10}, () => 0); // 벚꽃나무 이미지 좌우 10세트 배열로 표현
  const CountGrass = Array.from({length: 13}, () => 0); // 풀밭 이미지 13세트 배열로 표현
  const CountStone = Array.from({length: 4}, () => 0);
  const tentline = Array.from({length: 5}, () => 0);  

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 움직이는 속도 조절하기 -> acceleration 값 조절*/}
        <a-entity camera look-controls wasd-controls={{acceleration: 10}} position="0 1.6 0"></a-entity>

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
