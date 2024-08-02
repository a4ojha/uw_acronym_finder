import React, { useState, useEffect } from "react";
import { data } from "../api/data";

// Get a random acronym/full name pair (for searchbar placeholder)
export function getRandomEntries() {
  let randomIndex = Math.floor(Math.random() * data.length);
  const randomAcronym = data[randomIndex].acronym;
  randomIndex = Math.floor(Math.random() * data.length);
  const randomFullName = data[randomIndex].full_name;
  return [randomAcronym, randomFullName];
}

const Results = ({ search, activeButtons }) => {
  // Fade in effect
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 750); // duration should match the CSS animation duration
    return () => clearTimeout(timer);
  }, [search, activeButtons]);

  // Tracks hover index
  const [hoverIndex, setHoverIndex] = useState(null);

  // Filter data based on search and active buttons
  const filteredData = data.filter((item) => {
    if (activeButtons.acronym && activeButtons.fullname) {
      return item.acronym.toLowerCase().includes(search.toLowerCase()) || item.full_name.toLowerCase().includes(search.toLowerCase());  // show all data since both selected
    }
    else if (activeButtons.acronym) {
      return item.acronym.toLowerCase().includes(search.toLowerCase());
    }
    else if (activeButtons.fullname) {
      return item.full_name.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  })

  return (
    <div className={`w-8/12 ${fade ? 'fade-in' : ''}`} id="results-container">
      <hr className="my-4 "/>
      <table className="w-full text-base table-fixed mb-10" id="table">
      <thead className="text-mainGray baijam-bold uppercase">
      <tr className="">
        <th scope="col" className="py-3 pr-10 text-right col-acronym">
          Acronym
        </th>
        <th scope="col" className="text-left col-fullname">
          Full name
        </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => 
          <tr key={item.id}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            >  
            <td className={`baijam-bold text-white text-right pr-10 transition-colors duration-200 ${hoverIndex === index ? 'text-yellow-300' : ''}`}>
              {item.acronym}
            </td>
            <td className={`baijam-italic text-white transition-colors duration-200 ${hoverIndex === index ? 'text-yellow-300' : ''}`}>
              {item.full_name}
            </td>
          </tr>
        )}
      </tbody>
      </table>
    </div>
  );
};

export default Results;