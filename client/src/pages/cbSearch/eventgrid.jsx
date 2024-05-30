import React from 'react';
import ClubItem from './clubItem'; // Ensure the correct path to ClubItem component

const EventGrid = ({ clublist, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = clublist.slice(startIndex, startIndex + itemsPerPage);

  
  
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 gap-6 w-full max-w-[1280px]">
        {paginatedEvents.map((club,index) => (
          <ClubItem 
        
            title={club.club_nm}
            location={club.club_loc}
            imageSrc={`https://vtvkgtqvczyuteenfadw.supabase.co/storage/v1/object/public/club_image/${club.club_seq-1}.jpg`} // Correct relative path to the image
          />
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
