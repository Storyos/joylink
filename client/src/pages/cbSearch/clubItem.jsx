import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ClubItem = ({ index,title, imageSrc, location, isFree, date }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative flex flex-col items-center h-full p-4 border border-gray-200 rounded-lg">
      <div className="absolute top-6 right-6">
        <button onClick={toggleLike} className="focus:outline-none">
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} className={`text-2xl ${liked ? 'text-red-500' : 'text-gray-500'}`} />
        </button>
      </div>
      <img src={imageSrc} alt={title} className="object-cover mb-2 rounded-lg w-72 h-72" />
      <div className="flex-grow w-full px-2 text-left">
        <div className="mb-1 text-sm text-gray-600">{location}</div>
        <Link to="/cbDescription" className="block mb-2 text-black hover:text-blue-700">
          {title}
        </Link>
        <div className="flex items-center justify-between mb-16 text-sm">
          <span className="text-gray-500">{date}</span>
        </div>
      </div>
      <Link to="/cbJoin" className="absolute p-2 text-white transform -translate-x-1/2 bg-blue-400 rounded bottom-4 left-1/2 hover:bg-blue-200 w-12 text-center">
        신청
      </Link>
    </div>
  );
};

export default ClubItem;
