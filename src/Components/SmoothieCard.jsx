import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SmoothieCard = ({ smoothie, handleDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    console.log("Editing item with id ", smoothie.id);
    navigate(`/update/${smoothie.id}`);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-xs w-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      
      {/* Ratings Badge */}
      <div className="absolute -top-3 -right-3 bg-purple-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
        {smoothie.ratings}
      </div>

      {/* Smoothie Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 break-words truncate">
        {smoothie.title}
      </h3>

      {/* Smoothie Description */}
      <p className="text-gray-600 text-sm leading-relaxed break-words mb-4 h-16 overflow-hidden">
        {smoothie.smoothies}
      </p>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleEditClick}
          className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200"
        >
          <FiEdit2 className="text-lg cursor-pointer" />
          Edit
        </button>

        <button
          onClick={() => handleDelete(smoothie.id)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg shadow-sm transition cursor-pointer duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SmoothieCard;
