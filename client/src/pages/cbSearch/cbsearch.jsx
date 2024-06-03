import React, { useEffect, useState } from 'react';
import { supabase } from '../../App';
import SearchBar from './searchbar';
import EventGrid from './eventgrid';

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-1 text-sm text-gray-600">
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
      <button
        key={page}
        className={`px-2 py-1 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ))}
  </div>
);

function CbSearch() {
  const [clublist, setClubList] = useState([
  ]);
  
  useEffect(() => {
    getClubList();
  }, []);

  const getClubList = async () => {
    const { data, error } = await supabase.from('clubs').select('*');
    if (error) {
      console.log(error);
    } else {
      setClubList(data);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(clublist.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen m-0 font-custom">
      <SearchBar />
      <div className="max-w-screen-xl p-6 mx-auto">
        {/* <div className="p-4 m-0 overflow-hidden bg-white rounded shadow"> */}
          <div className="mb-4 text-xl font-bold">개설된 모임 ({clublist.length}개)</div>
          <EventGrid clublist={clublist} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        {/* </div> */}
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default CbSearch;

