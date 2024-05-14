import { useEffect, useRef, useState } from "react";

export default function Mainpage () {

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
    <div>
      <div className="grid grid-cols-4 gap-4 m-4 overflow-hidden h-[600px] w-[1900px]">
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-100px] translate-y-[-150px]">
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-55px] translate-y-[-300px]">
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-75px] translate-y-[-150px]">
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt=""/>
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-30px] translate-y-[-300px]">
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
          <img className="scroll-image-down" src="https://picsum.photos/id/235/400/300" alt=""/>
        </div>
      </div>
    </div>
  )
}