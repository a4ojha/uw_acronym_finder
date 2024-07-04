
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Searchbar = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className='flex items-center border border-mainGray bg-inherit rounded-full w-8/12 h-10'>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="flex-grow bg-transparent outline-none px-4 text-sm rounded-l-full text-mainGray baijam-semi-bold placeholder-mainGray"
        placeholder='Try "ECE" or "Student Life Centre"'
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-4 w-4 h-fit text-mainGray" />
    </div>
  );
}


export default Searchbar;