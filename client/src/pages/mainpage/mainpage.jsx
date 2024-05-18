import React, { useEffect, useState } from "react";

export default function Mainpage() {
  useEffect(() => {
    const handleScroll = () => {
      const imagesUp = document.querySelectorAll(".scroll-image-up");
      const imagesDown = document.querySelectorAll(".scroll-image-down");

      imagesUp.forEach((image) => {
        const scrollY = window.scrollY;
        const translateY = -scrollY / 2;
        image.style.transform = `translateY(${translateY}px)`;
      });

      imagesDown.forEach((image) => {
        const scrollY = window.scrollY;
        const translateY = scrollY / 2;
        image.style.transform = `translateY(${translateY}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 카드만들기
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ["Popular", "레저", "스터디", "여행"];
  const cards = [
    { image: "https://picsum.photos/id/235/400/300", text: "Card 1" },
    { image: "https://picsum.photos/id/236/400/300", text: "Card 2" },
    { image: "https://picsum.photos/id/237/400/300", text: "Card 3" },
    { image: "https://picsum.photos/id/238/400/300", text: "Card 4" },
    { image: "https://picsum.photos/id/239/400/300", text: "Card 5" },
    { image: "https://picsum.photos/id/240/400/300", text: "Card 6" },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-4 gap-4 overflow-hidden h-[600px] w-[1900px]">
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-100px] translate-y-[-150px]">
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-55px] translate-y-[-300px]">
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-75px] translate-y-[-150px]">
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-up"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 rotate-12 translate-x-[-30px] translate-y-[-300px]">
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
          <img
            className="scroll-image-down"
            src="https://picsum.photos/id/235/400/300"
            alt=""
          />
        </div>
      </div>

      <br></br><br></br>
      <h1 className="flex justify-center">조이링크에서 다양한 모임에 참여하세요!</h1> <br></br><br></br><hr></hr>
      {/* 카드만들기 */}
      <div className="flex justify-center mt-8">
        <div className="space-x-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              style={{ fontWeight: selectedButton === index ? "bold" : "normal" }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 justify-center m-4">
        {selectedButton !== null &&
          cards
            .filter(
              (_, index) =>
                index >= selectedButton * 2 && index < (selectedButton + 1) * 2
            )
            .map((card, index) => (
              <div
                key={index}
                className="p-2 rounded text-center shadow-md"
              >
                <img src={card.image} alt="" className="w-full mb-2" />
                <p>{card.text}</p>
              </div>
            ))}
      </div>
    </div>
  );
}



