import React, { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRandomEntries } from './Results';

const Searchbar = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const [placeholders, setPlaceholders] = useState(['', '']);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const updatePlaceholders = () => {
      const entries = getRandomEntries();
      if (entries.length >= 2) {
        setPlaceholders([entries[0], entries[1]]);
        setAnimationKey((prevKey) => prevKey + 1); // Trigger re-render
      }
    };

    // Initial placeholder text
    updatePlaceholders();

    const interval = setInterval(() => {
      updatePlaceholders();
    }, 3000);   // Change placeholder every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Updated placeholders:", placeholders);
  }, [placeholders]);

  return (
    <>
      {/* <div className="searchbar"></div> */}
      
      <div className='flex justify-between items-center border border-mainGray bg-inherit rounded-full w-8/12 h-10'>
        <div className="relative flex-grow h-10">
          <input
            className="cursor-text absolute inset-0 w-full h-full bg-transparent outline-none px-4 text-sm rounded-l-full text-mainGray baijam-semi-bold"
            type="text"
            value={search}
            onChange={handleChange}
          />
          {search.length === 0 && (   // display placeholder if search is empty
            <span className="pointer-events-none absolute inset-0 flex items-center px-4 text-sm baijam-semi-bold text-mainGray placeholder-mainGray overflow-hidden whitespace-nowrap text-ellipsis">
              Try&nbsp;
                <span
                  key={`placeholder0-${animationKey}`} // Unique key for first placeholder
                  className="inline-block swooshIn italic"
                >
                  &quot;{placeholders[0]}&quot;
                </span>
              &nbsp;&nbsp;or&nbsp;
                <span
                  key={`placeholder1-${animationKey}`} // Unique key for second placeholder
                  className="inline-block swooshIn italic overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  &quot;{placeholders[1]}&quot;
                </span>
            </span>
          )}
        </div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-4 w-4 h-fit text-mainGray" />
      </div>
    </>
  );
}

export default Searchbar;
