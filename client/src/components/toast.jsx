import React, { useEffect, useState } from 'react';

// Toast 컴포넌트 정의
function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // 3초 후에 토스트를 자동으로 닫습니다.
    return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 해제
  }, [onClose]);

  return (
    <div className="fixed px-4 py-2 text-white bg-gray-800 rounded bottom-5 right-5">
      {message}
    </div>
  );
}

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleCreateClick = () => {
    setShowToast(true);
  };

  return (
    <div>
      <button onClick={handleCreateClick}>메시지 보기</button>
      {showToast && <Toast message="액션 완료!" onClose={() => setShowToast(false)} />}
    </div>
  );
}

export default App;
