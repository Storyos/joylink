export default function Footer() {
  return (
    <footer className="px-8 py-8 text-white bg-gray-800">
      <div className="flex flex-col items-start justify-between max-w-6xl mx-auto md:flex-row">
        <div className="mb-8 md:mb-0">
          <img src="/icons/joylink_blue_logo.png" alt="Joylink" className="h-8 mb-4" />
          <ul>
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="font-bold">Contact</h4>
          <p>Business storyoser@pukyong.ac.kr</p>
          <p>Recruit gijae8888@naver.com</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="font-bold">Address</h4>
          <p>부산 남구 용소로 45 부경대학교대연캠퍼스</p>
        </div>
        <div>
          <ul>
            <li><a href="#" className="hover:underline">서비스 이용약관</a></li>
            <li><a href="#" className="text-yellow-500 hover:underline">개인정보 처리방침</a></li>
            <li><a href="#" className="hover:underline">서비스 이용정책</a></li>
            <li><a href="#" className="hover:underline">개인정보 유효기간제</a></li>
            <li><a href="#" className="hover:underline">개인정보 이용내역 통지</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-4 mt-8 text-sm border-t border-gray-700">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
          <div className="text-center md:text-left">
            <p>㈜JOYLINK 대표이사</p>
            <p>© All rights reserved to JOYLINK 2024</p>
          </div>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a href="#"><img src="/icons/facebook.png" alt="Facebook" className="h-5" /></a>
            <a href="#"><img src="/icons/instagram.png" alt="Instagram" className="h-5" /></a>
            <a href="#"><img src="/icons/youtube.png" alt="YouTube" className="h-5" /></a>
            <a href="#"><img src="/icons/twitter.png" alt="Twitter" className="h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
