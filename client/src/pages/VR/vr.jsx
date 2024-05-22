import React, { useEffect, useRef } from "react";
import "aframe";
import "aframe-particle-system-component";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default function Vr() {
  const glbFilePath = "/doll_ringo_ani__physics_test.glb";
  
  const cherryBlossomImgPath = "/cherry_blossom.png";
  const grassImgPath ="/grass.jpg";
  const easelFbxPath = "/easel.fbx";
  
  const CountCherryBlossom = Array.from({length: 6}, () => 0); // 벚꽃나무 이미지 좌우 6세트 배열로 표현
  const CountGrass = Array.from({length: 9}, () => 0); // 풀밭 이미지 9세트 배열로 표현
  
  
  const FbxModel = ({ url, position, scale, rotation }) => {
    const modelRef = useRef();
  
    useEffect(() => {
      const loader = new FBXLoader();
      loader.load(url, (object) => {
        object.scale.set(scale[0], scale[1], scale[2]);
        modelRef.current.object3D.add(object);
      });
    }, [url, scale]);
  
    return <a-entity ref={modelRef} position={position} rotation={rotation}></a-entity>;
  };

  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">

        {/* 움직이는 속도 조절하기 -> acceleration 값 조절*/}
        <a-entity camera look-controls wasd-controls={{acceleration: 10}} position="0 1.6 0"></a-entity>

        {/* 하늘 */}
        <a-sky color="#9CCEFF"></a-sky>

        {/* 이젤 */}
        <a-entity id="easel" 
                  gltf-model="url(easel.glb)"
                  scale = "0.2 0.2 0.2"
                  position="-3 1 2" >
        </a-entity>
        
        <FbxModel url ={easelFbxPath} 
        position="0 1.0 0"
        scale={[0.001, 0.001, 0.001]}
        rotation="0 180 0"/>
        
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


