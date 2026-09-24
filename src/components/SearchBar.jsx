import { CiSearch } from "react-icons/ci";
import { useId } from "react";
function SearchBar({placeholder,className}){
    const searchId=useId();
    function handleSearch(event){
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSearch} className={`flex  items-center justify-between py-1  md:py-2 md:px-4 pr-1 pl-2 rounded-full  shadow-md shadow-black/20   ${className}`}>
          <div className="flex flex-1 min-w-0 items-center">
              <CiSearch  aria-hidden="true" className="text-lg md:text-2xl text-teal-700 "/>
            <label htmlFor={searchId} className="sr-only">search</label>
            <input id={searchId} type="search" name="search" placeholder={placeholder} autoComplete="off"  className=" outline-none pl-2 text-sm  min-w-0 flex-1 "/>
            
          </div>
            <button  type="submit" className="shrink-0 bg-teal-800 text-sm   px-4 py-2 text-gray-100  hover:bg-teal-700 hover:scale-[1.02] transition-all duration-200 rounded-full shadow-md ">Search</button>
            
        </form>
    )
}
export default SearchBar 