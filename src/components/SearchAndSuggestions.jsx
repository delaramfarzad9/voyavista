import React from 'react'
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";

const SearchAndSuggestions = () => {
  return (
     {/* search bar middle bottom */}
  <div className="flex flex-col justify-center items-center gap-2 md:gap-4 absolute bottom-0 left-1/2  -translate-x-1/2   translate-y-1/3 z-25  mb-2  ">
  
      <SearchBar placeholder="Where do you want to go?"  className="bg-gray-100 w-[calc(100vw-2rem)] max-w-md "/>
      
      {/* suggestion bar  */}
        <div className="flex flex-row gap-2 justify-center items-center  ">
            <SearchSuggestions title="Scottish Highlands"/>
        <SearchSuggestions title="Historical"/>
        <SearchSuggestions className="hidden md:flex" title="Countryside"/>
        <SearchSuggestions title="London"/>
      
        </div>
  </div>
        
  )
}

export default SearchAndSuggestions