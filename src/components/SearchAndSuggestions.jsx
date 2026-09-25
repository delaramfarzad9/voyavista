import React from 'react'
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";

const SearchAndSuggestions = ({ className }) => {
  return (
  
        <>
           {/* search bar middle bottom */}
  <div className={`flex flex-col justify-center items-center gap-2 md:gap-4  z-25  mb-2 ${className} `}>
  
      <SearchBar placeholder="Where do you want to go?"  className="bg-gray-100 w-[calc(100vw-2rem)] max-w-md "/>
      
      {/* suggestion bar  */}
        <div className="flex flex-row gap-2 md:gap-3 justify-center items-center flex-wrap ">
            <SearchSuggestions title="Scotland"/>
        <SearchSuggestions title="Historical"/>
        <SearchSuggestions  title="Countryside"/>
        <SearchSuggestions title="London"/>
        <SearchSuggestions className="hidden md:flex" title="Wales"/>
        <SearchSuggestions className="hidden md:flex" title="Villages"/>
      
        </div>
  </div>
        </>  )
}

export default SearchAndSuggestions