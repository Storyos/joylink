import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from './joy.jpg'; // 이미지 파일 경로

const AnimatedPage = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // 페이지가 로드될 때 이미지를 숨기는 타이머를 설정합니다.
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000); // 이미지를 보여줄 시간 (ms)

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Transition
        show={showImage}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img src={Image} alt="Your Image" className="max-w-full mx-auto" />
      </Transition>
    </div>
  );
};

export default AnimatedPage;

