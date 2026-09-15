import { Link } from "react-router-dom"

function SearchSuggestions({title,className=""}){
    return (
       <Link to="/experiences" className= {`font-semibold whitespace-nowrap bg-gray-100/90 md:px-3 px-2 py-2 rounded-full  shadow-md shadow-black/20 text-xs md:text-sm  text-gray-700 hover:bg-neutral-100 transition-colors duration-200  ${className}`} >
{title}
       </Link>
    )
}
export default SearchSuggestions
