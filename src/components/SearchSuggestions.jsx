import { Link } from "react-router-dom"

function SearchSuggestions({title,className="", variant = "inactive"}){
    const variants={
        active:"bg-teal-600 text-gray-100",
        inactive:"bg-gray-100/90 text-teal-700"
    }
    return (
       <Link to="/experiences" className= {`font-semibold whitespace-nowrap  md:px-3 px-2 py-2 rounded-full  shadow-md shadow-black/20 text-xs md:text-sm   hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.01] ${className} ${variants[variant]}`} >
{title}
       </Link>
    )
}
export default SearchSuggestions
