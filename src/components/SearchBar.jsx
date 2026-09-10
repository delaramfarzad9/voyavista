import { CiSearch } from "react-icons/ci";
function SearchBar({placeholder,className,searchtitle}){
    return(
        <div className="flex flex-row items-center justify-between max-w-md border border-green-600 py-4 px-8 rounded-full my-8">
            <CiSearch className="text-2xl text-green-600"/>
            <label htmlFor="search" className="sr-only">`search{searchtitle}`</label>
            <input id="search" type="search" name="search" placeholder={placeholder} autoComplete="off"  className={`w-full outline-none pl-2  ${className}`}/>
            
        </div>
    )
}
export default SearchBar