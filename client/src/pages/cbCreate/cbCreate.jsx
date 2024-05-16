import React, { useState } from 'react';
import TestEditor from '../../components/draftEditor';
import CreateModal from '../../components/createModal'; // 이름 변경
import Button from '@mui/material/Button';

function CbCreate() {
  // 모달 상태를 관리하기 위한 상태 훅
  const [showModal, setShowModal] = useState(false);

  // 모달을 표시하는 함수
  const handleCreate = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="p-20 mx-auto max-w-screen-6xl bg-f3f4f6">
        <div className='max-w-screen-6xl'>
          <fieldset className="p-4 mb-6 border">
            <legend className="mb-4 text-lg font-bold">모임 만들기</legend>
            <div className="flex justify-between mb-4 space-x-4">
              <div className="flex-grow">
                <input type="text" placeholder="제목을 입력하세요 (100자 이내)" className="w-full mb-4 input" />
                <input type="text" placeholder="이벤트를 간단하게 소개하세요 (100자 이내)" className="w-full mb-4 input" />
                <input type="text" placeholder="태그 (예: #온오프믹스, #스타트업, #창업)" className="w-full input" />
              </div>
              <div className="w-48">
                <img src="/path/to/your/image.jpg" alt="Event" className="w-full h-auto" />
              </div>
            </div>
          </fieldset>

          <fieldset className="p-4 border">
            <legend className="mb-4 text-lg font-bold">상세 정보</legend>
            <div>
              <TestEditor />  // DraftEditor 컴포넌트 사용
            </div>
          </fieldset>
        </div>
      </section>
      <div className='fixed bottom-0 flex justify-center w-full py-4 space-x-4 bg-black bg-opacity-50'>
        <Button variant="contained" color="primary">미리보기</Button>
        <Button variant="contained" color="primary">임시저장</Button>
        <Button onClick={handleCreate} variant="contained" color="primary">작성완료</Button>
      </div>
      {showModal && <CreateModal message="동아리가 성공적으로 생성되었습니다." onClose={() => setShowModal(false)} />}
    </>
  );
}

export default CbCreate;
