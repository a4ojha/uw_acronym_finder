import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div id="navbar" className="flex flex-row w-full md:justify-end sm:justify-center px-16 py-5 top-0 z-999 fixed">
      <a href='https://uwaterloo.ca/brand/downloads-and-resources/university-waterloo-writing-style-guide/waterloo-related-acronyms' target='_blank' title="UWaterloo's Acronym Repository" className='text-mainGray baijam-semi-bold text-lg hover:opacity-60 transition-opacity duration-200'>Docs</a>
      <a href='#' title="Suggest an acronym" className='text-mainGray ml-6 baijam-semi-bold text-lg hover:opacity-60 transition-opacity duration-200'>Suggest</a>
      <a href='https://github.com/a4ojha/uw_acronym_finder' target='_blank'>
      <Image title="Source code" src={'/github.png'} alt='github logo' width={30} height={20} className="ml-8 hover:opacity-60 transition-opacity duration-200"/>
      </a>
    </div>
  );
};

export default Navbar