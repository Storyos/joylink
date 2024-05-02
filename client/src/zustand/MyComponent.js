// MyComponent.js
import React, { useEffect } from 'react';
import useColumnStore from './columnStore';

const MyComponent = () => {
  const { columns, fetchColumns } = useColumnStore();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 컬럼 정보를 가져오기 위해 useEffect 사용
    fetchColumns();
  }, [fetchColumns]);

  // columns 상태가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log("Columns state:", columns);
  }, [columns]);

  return (
    <div>
      <h2>Columns:</h2>
      {columns.length > 0 ? (
        <ul>
          {columns.map((column, index) => (
            <li key={index}>{column}</li>
          ))}
        </ul>
      ) : (
        <p>Loading columns...</p>
      )}
    </div>
  );
};

export default MyComponent;

