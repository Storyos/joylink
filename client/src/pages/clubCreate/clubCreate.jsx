import React, { useState } from 'react';
import TestEditor from '../../components/draftEditor';

function ClubCreate() {
  // WYSIWYG 에디터의 상태를 관리하는 로직
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <section className="max-w-screen-lg p-20 mx-auto"> {/* padding 수정 */}
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
    </section>
  );
}

export default ClubCreate;
