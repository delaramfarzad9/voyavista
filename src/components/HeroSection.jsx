
import { IoMdArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import { useState,useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function HeroSection() {
  const[currentSlide,setCurrentSlide]=useState(1);
  const slides = [
  {
    image: "/images/sevensisters_hero.png",
    location: "Seven Sisters",
    region: "East Sussex",
  },
  {
    image: "/images/stonehenge2_hero.png",
    location: "Stonehenge",
    region: "Wiltshire",
  },
  {
    image: "/images/london_hero.png",
    location: "London",
    region: "England",
  },
];
function nextSlide() {
setCurrentSlide((previousSlide)=>
previousSlide===slides.length-1 ? 0 : previousSlide+1)
};

function previousSlide() {
 setCurrentSlide((previousSlide)=>
previousSlide===0 ? slides.length-1 : previousSlide-1)
};
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000);


  return () => {
    clearInterval(interval);
  };
}, []);

    return(
<section className="relative hero w-full   bg-cover
    bg-center
    bg-no-repeat h-[70vh] md:h-screen flex  items-center md:px-20 px-5"
    style={{backgroundImage:`url(${slides[currentSlide].image})`}}
    
    >
     
        {/* left side */}
      <div className="flex flex-col gap-4  translate-y-[-10%]  ">
        <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300/80">
  Voyage · Discover · Remember
</p>
          <h1 className="text-[#fec30e] text-shadow-gray-800 text-shadow-lg font-dm-serif-display text-2xl md:text-5xl  ">Discover more of the UK.</h1>
        <p className="md:max-w-md max-w-xs leading-relaxed text-gray-100 text-sm md:text-xl">From dramatic coastlines to hidden countryside escapes <span className="hidden md:inline">—find places and experiences worth the journey.</span></p>
          <Link to="/experiences" className="hidden md:flex text-xs md:text-base self-start gap-2  shadow-md  shadow-gray-800 justify-center items-center bg-[#1a3f22] rounded-lg px-4 py-2 text-gray-100 font-semibold hover:bg-[#58761b] transition-colors duration-200">
        Start Exploring
        <IoMdArrowForward aria-hidden="true"  className=" text-lg"/>
        </Link>
      </div>
      {/* right side location */}
      <div className="flex gap-1 md:text-sm font-semibold text-gray-100 items-center  absolute lg:bottom-20 lg:right-10 bottom-30 sm:bottom-40 right-5 text-[10px]">
        <IoLocationOutline aria-hidden="true"/>
        <p>{slides[currentSlide].location}</p>
        <p className="hidden sm:flex">{`·${slides[currentSlide].region}`}</p>
      </div>
     
      {/* search bar middle bottom */}
  <div className="flex flex-col justify-center items-center gap-2 md:gap-4 absolute bottom-0 left-1/2  -translate-x-1/2   md:translate-y-0  z-25  mb-2  ">
   {/* Carousel navigation dots */}
      <div className="flex gap-2">
        {slides.map((slide, index) => (
      <button  key={index}
       type="button"
        onClick={()=>setCurrentSlide(index)}
         aria-label={`Show ${slide.location}`}
         className={`w-3 h-3 rounded-full ${
        index===currentSlide ? "bg-gray-100" : "bg-gray-100/40 transition-colors duration-300"
      }`} />
      ))}</div>
      <SearchBar placeholder="Where do you want to go?"  className="bg-gray-100 w-[calc(100vw-2rem)] max-w-md "/>
      
      {/* suggestion bar  */}
        <div className="flex flex-row gap-2 justify-center items-center  ">
            <SearchSuggestions title="Scottish Highlands"/>
        <SearchSuggestions title="Historical"/>
        <SearchSuggestions className="hidden md:flex" title="Countryside"/>
        <SearchSuggestions title="London"/>
      
        </div>
  </div>
         {/* next & prev buttons of the hero image */}
         <button className="absolute top-1/2 -translate-y-1/2 right-0 text-gray-100/60 " aria-label="next slide" onClick={nextSlide}>
          <MdOutlineNavigateNext className="text-6xl"/>
         </button>
         <button   aria-label="Previous slide" onClick={previousSlide} className=" absolute top-1/2 -translate-y-1/2 left-0 text-gray-100/60 ">
          <GrFormPrevious className="text-6xl"/></button>
        </section> 
    )
}
export default HeroSection