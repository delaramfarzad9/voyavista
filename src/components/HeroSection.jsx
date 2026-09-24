
import { IoMdArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useState,useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function HeroSection() {
  const[currentSlide,setCurrentSlide]=useState(1);
  const slides = [
  {
    image: "/images/sevensisters_hero.png",
    mobileImage: "/images/sevensisters_mobile.png",
    location: "Seven Sisters",
    region: "East Sussex",
  },
  {
    image: "/images/stonehenge2_hero.png",
    mobileImage: "/images/stonehenge_mobile.png",
    location: "Stonehenge",
    region: "Wiltshire",
  },
  {
    image: "/images/london_hero.png",
    mobileImage: "/images/london_mobile.png",
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
<section className="  w-full mt-16 md:mt-24 flex flex-col md:flex-row  gap-8 md:gap-12 lg:gap-20   items-start md:items-center px-5 md:px-10 lg:px-20"
    
    
    >

     
        {/* left side */}
      <div className="flex flex-col gap-8   ">
        <div>
          <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-teal-800">
  Voyage · Discover · Remember
</p>
          <h1 className="text-teal-700 text-shadow-stone-700 text-shadow-md font-dm-serif-display text-2xl md:text-5xl lg:text-6xl tracking-wide leading-[1.05] md:leading-[1.08]">Discover more of the UK.</h1>
        </div>
        <p className="md:max-w-lg max-w-xs leading-relaxed text-mist-600 text-sm md:text-xl">From dramatic coastlines to hidden countryside escapes <span className="hidden md:inline ">—find places and experiences worth the journey.</span></p>
        {/* CTA BUTTON */}
          <Link to="/experiences" className="hidden md:flex text-xs md:text-base self-start gap-2  shadow-md  shadow-stone-700 justify-center items-center bg-teal-800 rounded-lg px-4 py-2 text-gray-100 font-semibold hover:bg-teal-700 hover:scale-[1.02] transition-all duration-200">
        Start Exploring
        <IoMdArrowForward aria-hidden="true"  className=" text-lg"/>
        </Link>
        
      </div>
      {/* right side Image */}
<div
  className="
    relative
    h-[50vh]
    min-h-[360px]
    w-full
    overflow-hidden
    rounded-3xl
    md:h-[calc(100vh-150px)]
    md:min-h-[560px]
    md:rounded-4xl
  "
>
  {/* Mobile background image */}
  <div
    style={{
      backgroundImage: `url(${slides[currentSlide].mobileImage})`,
    }}
    className="
      absolute inset-0
      bg-cover bg-center bg-no-repeat
      md:hidden
    "
  />

  {/* Desktop background image */}
  <div
    style={{
      backgroundImage: `url(${slides[currentSlide].image})`,
    }}
    className="
      absolute inset-0
      hidden
      bg-cover bg-center bg-no-repeat
      md:block
    "
  />

  {/* Subtle gradient for better control visibility */}
  <div
    className="
      pointer-events-none
      absolute inset-0 z-10
      bg-gradient-to-t from-black/30 via-transparent to-transparent
    "
  />

  {/* Location */}
  <div
    className="
      absolute bottom-6 left-5 z-20
      flex items-center gap-1.5
      text-xs font-semibold text-gray-100
      md:bottom-8 md:left-8 md:text-sm
    "
  >
    <IoLocationOutline aria-hidden="true" />

    <span>{slides[currentSlide].location}</span>

    <span className="hidden text-gray-100/80 sm:inline">
      · {slides[currentSlide].region}
    </span>
  </div>

  {/* Previous button */}
  <button
    type="button"
    aria-label="Previous slide"
    onClick={previousSlide}
    className="
      absolute left-2 top-1/2 z-20
      -translate-y-1/2
      text-gray-100/70
      transition-colors duration-200
      hover:text-gray-100
      md:left-4
    "
  >
    <GrFormPrevious className="text-4xl md:text-5xl" />
  </button>

  {/* Next button */}
  <button
    type="button"
    aria-label="Next slide"
    onClick={nextSlide}
    className="
      absolute right-2 top-1/2 z-20
      -translate-y-1/2
      text-gray-100/70
      transition-colors duration-200
      hover:text-gray-100
      md:right-4
    "
  >
    <MdOutlineNavigateNext className="text-4xl md:text-5xl" />
  </button>

  {/* Carousel navigation dots */}
  <div
    className="
      absolute bottom-6 left-1/2 z-20
      flex -translate-x-1/2 items-center gap-2
    "
  >
    {slides.map((slide, index) => (
      <button
        key={slide.location}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Show ${slide.location}`}
        className={`
          h-1.5 rounded-full
          transition-all duration-300
          ${
            index === currentSlide
              ? "w-6 bg-gray-100"
              : "w-1.5 bg-gray-100/50 hover:bg-gray-100/80"
          }
        `}
      />
    ))}
  </div>
</div>
    
     
     
        </section> 
    )
}
export default HeroSection