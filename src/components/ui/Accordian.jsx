import React, { useState } from 'react';

const Accordian = ({ heading, paragraph }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <div
        className="flex items-center justify-between cursor-pointer text-white"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div
            className={`w-3 h-3 mr-2 rounded-full ${isOpen ? 'bg-white' : 'bg-blue-500'}`}
          ></div>
          <h2 className="text-lg font-medium">{heading}</h2>
        </div>
        <svg
          className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && <p className="mt-2 text-sm text-white">{paragraph}</p>}
    </div>
  );
};

export default Accordian

