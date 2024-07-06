import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div id="navbar" className="flex flex-row items-center w-full px-16 py-5 top-0 z-999 fixed">
      <a href='https://uwaterloo.ca/brand/downloads-and-resources/university-waterloo-writing-style-guide/waterloo-related-acronyms' target='_blank' title="UWaterloo's Acronym Repository" className='text-mainGray baijam-semi-bold sm:text-sm lg:text-lg hover:opacity-60 transition-opacity duration-200'>Docs</a>
      <a href='#' target='_blank' title="Suggest an acronym" className='text-mainGray ml-6 baijam-semi-bold sm:text-sm lg:text-lg hover:opacity-60 transition-opacity duration-200'>Suggest</a>
      <a href='https://github.com/a4ojha/uw_acronym_finder' target='_blank'>
      <img id="github-logo" title="Source code" src={'/github.png'} alt='github logo' className="ml-8 h-auto hover:opacity-60 transition-opacity duration-200 sm:w-[20px] md:w-[20px] lg:w-6 xl:w-7"/>
      </a>
    </div>
  );
};

export default Navbar