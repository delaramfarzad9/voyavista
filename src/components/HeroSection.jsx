
import { IoMdArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
function HeroSection() {
    return(
<section className="relative hero w-full  h-[calc(100vh-4rem)] flex  items-center pl-20 ">
        {/* left side */}
      <div className="flex flex-col gap-4  ">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
  Voyage · Discover · Remember
</p>
          <h1 className="text-gray-100 font-dm-serif-display  text-5xl shadow-lg ">Discover more of the UK.</h1>
        <p className="max-w-md leading-relaxed text-gray-200 text-xl">From dramatic coastlines to hidden countryside escapes, find places and experiences worth the journey.</p>
          <Link to="/experiences" className="self-start flex gap-2  justify-center items-center bg-emerald-800 rounded-lg px-4 py-2 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
        Start Exploring
        <IoMdArrowForward className=" text-lg"/>
        </Link>
      </div>
      {/* right side */}
      <div className="flex flex-row gap-1 text-sm font-semibold text-gray-100 items-center justify-center absolute bottom-20 right-10">
        <IoLocationOutline aria-hidden="true"/>
        <p>Seven Sisters · East Sussex</p>
      </div>
      {/* search bar middle bottom */}
    
      {/* <div className="bg-gray-100 rounded-lg shadow-lg shadow-black/20 absolute bottom-0 left-1/2 transform  w-full max-w-3xl p-4">
<SearchBar placeholder="Search experiences" className="w-full max-w-md mx-auto"/>
      </div> */}
      </section> 
    )
}
export default HeroSection