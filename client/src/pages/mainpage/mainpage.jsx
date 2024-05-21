import { useEffect, useState } from "react";
import { supabase } from "../../App";

export default function Mainpage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [boxcontents, setBoxContents] = useState([]);
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
      if (selectedCategory == '전체') {
        const { data, error } = await supabase.from('clubs').select(`club_ctg,club_nm,club_loc,club_desc`).order('club_seq', { ascending: false }).limit(5);
        setBoxContents(data);
        console.log("받은 카테고리값", data);
      }
      else {
        const { data, error } = await supabase.from('clubs').select(`club_ctg,club_nm,club_loc,club_desc`).eq('club_ctg', selectedCategory).limit(5);
        setBoxContents(data);
        console.log("받은 카테고리값", data);
      }

    }
    getCategoryContents();
  }, [selectedCategory])

  const cardBoxes = [
    {
      title: "수량별 판매가 변동되는 기능",
      details: "쇼핑몰 구축, 쇼핑몰 세팅, 커스텀 기능 제작",
      days: "30일",
    },
    {
      title: "앱 내 배너(링크)를 통해 접속하는 인앱 쇼핑몰 구축",
      details: "쇼핑몰 구축, 커스텀 기능 제작, 쇼핑몰 세팅",
      days: "30일",
    },
    {
      title: "박람회 홈페이지 구축",
      details: "제품 제작",
      days: "31일",
    },
    {
      title: "웹페이지 업그레이드",
      details: "쇼핑몰 리뉴얼, 웹·앱디자인",
      days: "33일",
    },
    {
      title: "쇼핑몰 웹 개발 프리랜서 채용",
      details: "쇼핑몰 구축, 쇼핑몰 리뉴얼, 솔루션 연동, 쇼핑몰 세팅",
      days: "365일",
    },
  ];

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

      <div className="p-6 bg-blue-100">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">조이링크에서 다양한 동아리들을 만나보세요!</span>
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
        <div className="p-6">
          <h2 className="mb-4 text-xl font-bold">{selectedCategory}관련 모임</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {boxcontents.map((card, index) => (
              <div key={index} className="p-4 bg-white rounded shadow">
                <div className="mb-2 text-gray-500">{card.club_ctg}</div>
                <h3 className="mb-2 text-lg font-semibold">{card.club_nm}</h3>
                <p className="mb-2">{card.club_desc}</p>

                <div className="mt-4 text-blue-500">
                  <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm1-14H9v2h2V6zm0 4H9v6h2v-6z" />
                  </svg>
                  <span>{card.club_loc}</span>
                </div>
              </div>
            ))}
            {boxcontents.length === 5 && (
              <div className="flex items-center justify-center p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold">더 많은 모임 보기</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}