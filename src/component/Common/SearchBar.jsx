import React, { useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
     e.preventDefault()
     console.log(searchTerm);
     setIsOpen(false)
     setSearchTerm("")
  };



  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-400 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-20 z-50 "
          : "w-auto"
      } `}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full ">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              className="bg-gray-200 px-4 py-2 rounded-lg focus:outline-none w-full placeholder-gray-500  "
            />
            {/* search icon */}
            <button type="submit" className=" absolute right-2 top-2  ">
              <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-black " />
            </button>  
          </div>
          {/* close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-8  text-gray-700 hover:text-black font-extrabold "
          >
            <HiXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-black" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
