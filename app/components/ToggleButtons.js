import React, { useState, useEffect } from 'react';

const ToggleButtons = ({ activeButtons, setActiveButtons }) => {

  // Function to handle button click and toggle active state
  const handleButtonClick = (buttonType) => {
    setActiveButtons((prevActiveButtons) => ({
      ...prevActiveButtons,
      [buttonType]: !prevActiveButtons[buttonType],
    }));
  };

  // Log the updated state whenever activeButtons changes
  useEffect(() => {
    console.log(activeButtons);
  }, [activeButtons]);
  

  return (
    <div className='flex flex-col items-center'>
      <span className='text-xs text-mainGray pt-2 baijam-light'>search by</span>
      <div className='flex flex-row mt-2'>
        <button
          type="button"
          className={`baijam-regular text-white rounded-full text-sm px-5 py-2 mb-2 mr-1 hover:opacity-50 transition ${
            activeButtons.acronym ? 'bg-[#3C255A]' : 'bg-[#323232]'
          }`}
          onClick={() => handleButtonClick('acronym')}
        >
          Acronym
        </button>
        <button
          type="button"
          className={`baijam-regular text-white rounded-full text-sm px-5 py-2 mb-2 ml-1 hover:opacity-50 transition ${
            activeButtons.fullname ? 'bg-[#3C255A]' : 'bg-[#323232]'
          }`}
          onClick={() => handleButtonClick('fullname')}
        >
          Full Name
        </button>
      </div>
    </div>
  );
};

export default ToggleButtons;
