import { useEffect, useState } from "react";
import { supabase } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Banner from "./banner";
import '../../index.css';

export default function Mainpage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [boxContents, setBoxContents] = useState([]);

  const categories = [
    { name: "전체", icon: "/icons/all.png" },
    { name: "스포츠", icon: "/icons/sports.png" },
    { name: "예술,미술", icon: "/icons/art.png" },
    { name: "학술", icon: "/icons/idea.png" },
    { name: "반려동물", icon: "/icons/pets.png" },
    { name: "경제", icon: "/icons/economy.png" },
    { name: "영화", icon: "/icons/movie.png" },
  ];

  useEffect(() => {
    async function getCategoryContents() {
      if (selectedCategory === '전체') {
        const { data, error } = await supabase
          .from('clubs')
          .select(`club_ctg,club_nm,club_loc,club_desc`)
          .order('club_seq', { ascending: false })
          .limit(5);
        setBoxContents(data);
        console.log("받은 카테고리값", data);
      } else {
        const { data, error } = await supabase
          .from('clubs')
          .select(`club_ctg,club_nm,club_loc,club_desc`)
          .eq('club_ctg', selectedCategory)
          .limit(5);
        setBoxContents(data);
        console.log("받은 카테고리값", data);
      }
    }
    getCategoryContents();
  }, [selectedCategory]);

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
  }; return (
    <div className="font-custom">
      <div>
        <div className="relative flex flex-col items-center justify-center p-16 text-center bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <div className="absolute inset-0 bg-center bg-cover filter blur-sm opacity-60" style={{ backgroundImage: "url('/assets/clubpic.jpg')" }}></div>
          <div className="relative z-10 p-10 bg-white bg-opacity-20 rounded-xl backdrop-filter backdrop-blur-lg">
            <h1 className="mb-4 text-4xl font-bold text-black md:text-6xl">
              모임의 시작, 조이링크
            </h1>
            <p className="mb-6 text-lg text-black">
              당신의 모임을 쉽고 빠르게 시작하고, 새로운 인연을 만들어 보세요.
            </p>
            <button className="px-6 py-2 text-white bg-black rounded-full hover:bg-gray-700">
              지금 시작하기
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center my-24 bg-blue-100 h-96">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              블록체인을 통한 투명한 장부 관리가 가능한 모임 플랫폼
            </h2>
            <p className="mt-4 text-2xl text-gray-600 ">
              이제껏 경험하지 못한 안전하고 편리한 모임 관리 서비스,<br />
              저희와 함께라면 당신의 모임이 더욱 새로워질 거예요.
            </p>
          </div>
        </div>



        <div className="m-4 overflow-hidden">
          <div className="grid grid-cols-4 gap-4 overflow-hidden h-[700px] w-[1900px]">
            <div className="flex flex-col gap-4 rotate-12 translate-x-[-100px] translate-y-[-150px]">
              <img className="scroll-image-up" src="./assets/main3.png" alt="" />
              <img className="scroll-image-up" src="./assets/main7.jpg" alt="" />
              <img className="scroll-image-up" src="./assets/main5.jpg" alt="" />
              <img className="scroll-image-up" src="./assets/main2.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-4 rotate-12 translate-x-[-20px] translate-y-[-480px]">
              <img className="scroll-image-down" src="./assets/main6.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main4.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main5.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main3.png" alt="" />
              <img className="scroll-image-down" src="./assets/main6.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-4 rotate-12 translate-x-[-75px] translate-y-[-150px]">
              <img className="scroll-image-up" src="./assets/main1.jpg" alt="" />
              <img className="scroll-image-up" src="./assets/main2.jpg" alt="" />
              <img className="scroll-image-up" src="./assets/main3.png" alt="" />
              <img className="scroll-image-up" src="./assets/main5.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-4 rotate-12 translate-x-[-30px] translate-y-[-300px]">
              <img className="scroll-image-down" src="./assets/main6.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main5.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main7.jpg" alt="" />
              <img className="scroll-image-down" src="./assets/main4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="p-6 bg-blue-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mx-4">
            <span className="text-2xl font-bold">조이링크에서 다양한 동아리들을 만나보세요!</span>
            <input type="text" placeholder="검색창" className="px-4 py-2 border rounded" />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex space-x-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`flex items-center justify-center w-20 h-20 rounded-full ${selectedCategory === category.name ? "bg-gray-700" : "bg-white"
                  }`}>
                  <img
                    src={category.icon}
                    alt={category.name}
                    className={`w-12 h-12 ${selectedCategory === category.name ? "invert" : ""}`}
                  />
                </div>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory && (
        <div className="p-6 mb-8 ">
          <h2 className="mb-4 text-xl font-bold">{selectedCategory == '전체' ? '전체' : `${selectedCategory}관련 모임`}</h2>
          <div className="grid grid-cols-1 gap-4 mx-4 md:grid-cols-2 lg:grid-cols-3">
            {boxContents.map((card, index) => (
              <div key={index} className="p-3 bg-white rounded shadow">
                <div className="mb-2 text-gray-500">{card.club_ctg}</div>
                <h3 className="p-2 mb-2 text-3xl font-semibold">{card.club_nm}</h3>
                <p className="mb-2">{card.club_desc}</p>

                <div className="mt-4 text-blue-500">
                  <FontAwesomeIcon icon={faMapLocationDot} className="inline-block w-4 h-4 mr-1" />
                  <span>{card.club_loc}</span>
                </div>
              </div>
            ))}
            {boxContents.length === 5 && (
              <div className="flex items-center justify-center p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold">더 많은 모임 보기</h3>
              </div>
            )}
          </div>
        </div>
      )}

      <Banner /> {/* 배너 컴포넌트를 여기 추가 */}
    </div>
  );
}