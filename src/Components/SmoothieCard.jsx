import React from 'react';

const SmoothieCard = ({ smoothie }) => {
  return (
   <div className="relative bg-white rounded-lg shadow-md p-5 max-w-xs w-full border border-gray-200 overflow-visible">
  {/* Rating badge half outside the box */}
  <div className="absolute -top-3 -right-3 bg-purple-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
    {smoothie.ratings}
  </div>
  
  {/* Card content */}
  <h3 className="text-xl font-bold text-gray-800 mb-3 break-words">{smoothie.title}</h3>
  <p className="text-gray-600 text-sm leading-relaxed break-words ">
    {smoothie.smoothies}
  </p>
</div>
  );
};

export default SmoothieCard;
