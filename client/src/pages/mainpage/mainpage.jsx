import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Mainpage() {

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
    <div>
      <div className="overflow-hidden">
        <div className="grid grid-cols-4 gap-4 overflow-hidden h-[600px] w-[1900px]">
          <div className="flex flex-col gap-4 rotate-12 translate-x-[-100px] translate-y-[-150px]">
            <img className="scroll-image-up" src="https://picsum.photos/id/235/400/300" alt="" />
            <img className="scroll-image-up" src="https://picsum.photos/id/236/400/300" alt="" />
            <img className="scroll-image-up" src="https://picsum.photos/id/237/400/300" alt="" />
          </div>
          <div className="flex flex-col gap-4 rotate-12 translate-x-[-55px] translate-y-[-300px]">
            <img className="scroll-image-down" src="https://picsum.photos/id/238/400/300" alt="" />
            <img className="scroll-image-down" src="https://picsum.photos/id/239/400/300" alt="" />
            <img className="scroll-image-down" src="https://picsum.photos/id/240/400/300" alt="" />
          </div>
          <div className="flex flex-col gap-4 rotate-12 translate-x-[-75px] translate-y-[-150px]">
            <img className="scroll-image-up" src="https://picsum.photos/id/241/400/300" alt="" />
            <img className="scroll-image-up" src="https://picsum.photos/id/242/400/300" alt="" />
            <img className="scroll-image-up" src="https://picsum.photos/id/243/400/300" alt="" />
          </div>
          <div className="flex flex-col gap-4 rotate-12 translate-x-[-30px] translate-y-[-300px]">
            <img className="scroll-image-down" src="https://picsum.photos/id/244/400/300" alt="" />
            <img className="scroll-image-down" src="https://picsum.photos/id/234/400/300" alt="" />
            <img className="scroll-image-down" src="https://picsum.photos/id/233/400/300" alt="" />
          </div>
        </div>
      </div>

      {/* 검색창 및 네비게이션 */}
      <div className="p-6 bg-blue-100">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">조이링크에서 다양한 동아리들을 만나보세요!</span>
          <input type="text" placeholder="검색창" className="px-4 py-2 border rounded" />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <img src="/icons/all.png" alt="전체" className="w-12 h-12" />
            </div>
            <span>전체</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <img src="/icons/sports.png" alt="스포츠" className="w-12 h-12" />
            </div>
            <span>스포츠</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <img src="/icons/art.png" alt="미술" className="w-12 h-12" />
            </div>
            <span>예술,미술</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <img src="/icons/idea.png" alt="학술" className="w-12 h-12" />
            </div>
            <span>학술</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <img src="/icons/reading.png" alt="독서" className="w-12 h-12" />
            </div>
            <span className="font-roboto">독서</span>
          </div>
        </div>
      </div>
    </div>

    </div>

  )
}