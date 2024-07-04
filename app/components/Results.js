import React from "react";
import { list } from "../api/list";

const Results = ({ search }) => {
  return (
    <div>
      <table class="w-full text-base">
      <thead class="text-base text-mainGray baijam-bold uppercase">
        <tr>
            <th scope="col" class="py-3 pr-10 text-right">
                Acronym
            </th>
            <th scope="col" class="text-left">
                Full name
            </th>
        </tr>
      </thead>
      <tbody>
      {list
        .filter((item) => {
          return search.toLowerCase() === ""
            ? ""
            : item.acronym.toLowerCase().includes(search.toLowerCase()) || item.full_name.toLowerCase().includes(search.toLowerCase());
        })
        .map((item) => (
          <tr key={item.id}>
            <td className="baijam-bold text-white text-base text-right pr-10">{item.acronym}</td>
            <td className="baijam-italic text-white text-base">{item.full_name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
