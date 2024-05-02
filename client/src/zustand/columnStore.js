// columnStore.js
import create from 'zustand';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://vtvkgtqvczyuteenfadw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dmtndHF2Y3p5dXRlZW5mYWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNzUxNDksImV4cCI6MjAyNzg1MTE0OX0.jepRIWNY3wZaaDK9vkRubvol5y9VuhzoPU1CNnuACQo');

// Zustand 스토어 생성
const useColumnStore = create((set) => ({
  columns: [], // 컬럼 정보를 저장할 배열
  fetchColumns: async () => {
    try {
      // Supabase로부터 컬럼 정보 가져오기
      const { data, error } = await supabase
        .from('users')
        .select('*') // 모든 컬럼 선택
        .limit(1); // 하나의 레코드에 대해서만 가져오기

      if (error) {
        throw error;
      }

      // 가져온 컬럼 정보를 상태에 저장
      if (data && data.length > 0) {
        const columns = Object.keys(data[0]);
        set((state) => ({ ...state, columns })); // 이전 상태를 업데이트하는 함수 전달
      }
    } catch (error) {
      console.error('Error fetching columns:', error.message);
    }
  },
}));

export default useColumnStore;

