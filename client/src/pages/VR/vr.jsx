import React from "react";
import "aframe";
import "aframe-particle-system-component";
import "aframe-extras"


export default function Vr() {
  const tent = "/tent.glb"
  return (
    <div>
      <h1>vr 페이지 입니다</h1>
      <a-scene className="aframe-scene">
        <a-entity gltf-model={`url(${tent})`} 
        position="0 0 -5"></a-entity>
      </a-scene>
    </div>
  );
}
