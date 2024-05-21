import React, { useEffect } from "react";
import "aframe";
import "aframe-particle-system-component";

export default function Vr() {
  const glbFilePath = "/doll_ringo_ani__physics_test.glb";
  
  const cherryBlossomImgPath = "/cherry_blossom.png";
  const grassImgPath ="/grass.jpg";
  
  const CountCherryBlossom = Array.from({length: 6}, () => 0); // 벚꽃나무 이미지 좌우 6세트 배열로 표현
  const CountGrass = Array.from({length: 9}, () => 0); // 풀밭 이미지 9세트 배열로 표현

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 움직이는 속도 조절하기 -> acceleration 값 조절*/}
        <a-entity camera look-controls wasd-controls="acceleration: 60" position="0 1.6 0"></a-entity>

        {/* 하늘 */}
        <a-sky color="#9CCEFF"></a-sky>

        {/* 벚꽃나무 (왼쪽) */}
        {CountCherryBlossom.map((_, index)=>(
          <a-image src={cherryBlossomImgPath} 
          position={`-9 5.5 ${3-(index*9)}`} 
          width="9" 
          height="9"
          rotation="0 90 0">
          </a-image>
        ))}

        {/* 벚꽃나무 (오른쪽) */}
        {CountCherryBlossom.map((_, index)=>(
          <a-image src={cherryBlossomImgPath} 
          position={`9 5.5 ${3-(index*9)}`} 
          width="9" 
          height="9"
          rotation="0 -90 0">
          </a-image>
        ))}
        
        {/* 풀밭 이미지 */}
        {CountGrass.map((_, index)=>(
          <>
            <a-image src={grassImgPath} 
                    position={`0 1 ${4.5-(6*index)}`}
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`6 1 ${4.5-(6*index)}`}
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
            <a-image src={grassImgPath} 
                    position={`-6 1 ${4.5-(6*index)}`} 
                    width="6" 
                    height="6"
                    rotation="90 90 0">
            </a-image>
          </>
        ))}
        
      </a-scene>
    </div>
  );
}


