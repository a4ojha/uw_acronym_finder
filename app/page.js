"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import Navbar from './components/Navbar';
import ToggleButtons from './components/ToggleButtons';

export default function Home() {
  const [search, setSearch] = useState('');
  
  // Dynamically set padding for the results table based on the height of the header content
  useEffect(() => {
    const fixedContent = document.getElementById('fixedContent');
    if (fixedContent) {
      const fixedHeight = fixedContent.offsetHeight;
      // console.log("This is how much padding to add to the table: " + fixedHeight);
      document.documentElement.style.setProperty('--fixed-height', `${fixedHeight}px`);
    }
  }, []);

  // States for filter buttons
  const [activeButtons, setActiveButtons] = useState({
    acronym: true,
    fullname: false,
  });

  // Show results only when search is not empty
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    if (search.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [search]);


  return (
    <div
      className="min-w-full flex flex-col items-center h-screen overflow-y-scroll container"
      style={{
        background:
          "linear-gradient(-34.01deg, #1e1145 6.55%, #1a1a1a 28.28%, #070707 84.76%, #000 93.45%)",
      }}
    >
      <Navbar />

      <div id="fixedContent" className='w-full mt-32'>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-5xl mb-4 font-bold text-center text-white baijam-bold">
            UW Acronym Finder
          </p>
          <Image
            src="/waterloo.png" 
            alt='Waterloo logo'
            width={85}
            height={93}
            className='mb-14'
          />
          
          <p className="mb-20 text-base text-center baijam-semi-bold-italic bg-gradient-to-r from-[#8458FF] to-[#4E329C] text-transparent bg-clip-text">
            Search from 400+ acronyms
          </p>
          
          <Searchbar search={search} setSearch={setSearch}/>
          <ToggleButtons activeButtons={activeButtons} setActiveButtons={setActiveButtons}/>
        </div>
      </div>

      

      {showResults && <Results search={search} activeButtons={activeButtons} className="z-10" />}

    </div>
  );
}
