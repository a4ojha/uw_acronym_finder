"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { list } from './api/list';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div
      className="w-full flex flex-col items-center relative"
      style={{
        background:
          "linear-gradient(145.99deg, #000 6.55%, #070707 15.24%, #1a1a1a 71.72%, #1e1145 93.45%)",
      }}
    >
      <div id="navbar" className=" flex flex-row  w-full justify-end px-16 py-8">
        <a href='https://uwaterloo.ca/brand/downloads-and-resources/university-waterloo-writing-style-guide/waterloo-related-acronyms' target='_blank' className='text-mainGray baijam-semi-bold text-lg hover:opacity-60 transition-opacity duration-200'>Docs</a>

        <a href='#' target='_blank'>
          <Image src={'/github.png'} alt='github logo' width={30} height={20} className="ml-8 hover:opacity-60 transition-opacity duration-200"/>
        </a>
      </div>

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
        <br />
        <Results search={search}/>
      </div>
    </div>
  );
}
