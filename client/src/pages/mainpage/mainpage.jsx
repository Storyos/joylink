import { useEffect, useRef, useState } from "react";

export default function Mainpage () {

  // 스크롤 시 이미지 위아래로 이동하는 기능
  useEffect(() => {
    const handleScroll = () => {
      const imagesUp = document.querySelectorAll('.scroll-image-up');
      const imagesDown = document.querySelectorAll('.scroll-image-down');
      
      imagesUp.forEach(image => {
        const scrollY = window.scrollY;
        const translateY = -scrollY / 2;
        image.style.transform = `translateY(${translateY}px)`;
      });
      
      imagesDown.forEach(image => {
        const scrollY = window.scrollY;
        const translateY = scrollY / 2;
        image.style.transform = `translateY(${translateY}px)`;
      });
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    // 스크롤 이미지 부분
    <div className="overflow-hidden">
      <div className="grid grid-cols-4 gap-4 overflow-hidden h-[600px] w-[1900px]">
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-100px] translate-y-[-150px]">
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/236/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/237/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-55px] translate-y-[-300px]">
          <img className="scroll-image-down" src="https://picsum.photos/id/238/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/239/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/240/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-75px] translate-y-[-150px]">
          <img className="scroll-image-up" src="https://picsum.photos/id/241/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/242/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/243/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-30px] translate-y-[-300px]">
          <img className="scroll-image-down" src="https://picsum.photos/id/244/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/234/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/233/400/300" alt=""/>
        </div>
      </div>
    </div>
  )
}