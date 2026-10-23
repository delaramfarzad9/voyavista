import { IoMdArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
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
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
    );
  }

  function previousSlide() {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1,
    );
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden  w-full md:my-10 flex flex-col md:flex-row  gap-8 md:gap-12 lg:gap-20   items-start md:items-center px-5 md:px-10 lg:px-20">
      {/* left side */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div>
          <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em]  text-teal-700">
            Voyage · Discover · Remember
          </p>
          <h1 className="text-teal-800 text-2xl md:text-5xl lg:text-6xl tracking-wide leading-[1.05] md:leading-[1.08]  font-bold">
            <span className="text-shadow-xs text-shadow-stone-500/30 font-fraunces">
              Discover more of the{" "}
            </span>
            <span className="uk-flag-text lg:text-7xl  ">UK </span>
          </h1>
        </div>
        <p className="md:max-w-lg max-w-xs leading-relaxed text-mist-600 text-sm md:text-xl">
          From dramatic coastlines to hidden countryside escapes{" "}
          <span className="hidden md:inline ">
            —find places and experiences worth the journey.
          </span>
        </p>
        {/* CTA BUTTON */}
        <Link
          to="/experiences"
          className=" md:mt-2 group inline-flex items-center gap-2 self-start rounded-lg bg-teal-800 px-6 py-3 text-sm font-semibold text-gray-100 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 md:text-base"
        >
          Start Exploring
          <IoMdArrowForward
            aria-hidden="true"
            className="text-lg transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
      {/*  Hero Image  */}
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
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center
  rounded-full bg-black/25 p-2 text-white transition-all duration-200
  hover:bg-teal-800/80 hover:scale-110 active:bg-teal-700 active:scale-95  focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-teal-400 md:left-4
"
        >
          <GrFormPrevious className="text-2xl md:text-3xl" />
        </button>

        {/* Next button */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className=" absolute right-3 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center
  rounded-full bg-black/25 p-2 text-white transition-all duration-200 hover:bg-teal-800/80
  hover:scale-110 active:bg-teal-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400
  md:right-4
"
        >
          <MdOutlineNavigateNext className="text-2xl md:text-3xl" />
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
  );
}
export default HeroSection;
