import HomeAboutSections from "../components/HomeAboutSections";
import { IoMapOutline } from "react-icons/io5";
import { RiSearchEyeLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
function AboutSection (){
    return(
<section className="    flex flex-col items-center
        px-5 py-16 md:py-20
        text-center  ">  
          {/* section label */}
    <p className="text-xs font-semibold tracking-[0.2em] text-teal-600"> HOW VOYAVISTA WORKS</p>
      {/* main heading */}
         <h2 className="mt-3 text-2xl font-semibold text-gray-900 md:text-3xl">
        Find the experience that fits you.
      </h2>

       {/* description */}
      <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
        From quiet countryside escapes to historic adventures and coastal
        getaways, discover experiences across the UK curated for different{" "}
        <span className="font-medium text-gray-700">tastes</span>,{" "}
        <span className="font-medium text-gray-700">moods</span> and{" "}
        <span className="font-medium text-gray-700">budgets</span>.
      </p>

 {/* steps */}
      <div
        className="
          mt-10
          flex w-full max-w-4xl
          flex-col items-center
          md:flex-row md:items-start md:justify-between
        "
      >
        <HomeAboutSections
          icon={<RiSearchEyeLine />}
          number="Step 1"
          header="EXPLORE"
          text="Find experiences that match what you're looking for."
           bgColor="bg-teal-50"
        />

        <HomeAboutSections
          icon={<SlCalender />}
          number="Step 2"
          header="BOOK"
          text="Choose your experience and plan your visit."
           bgColor="bg-amber-50"
        />

        <HomeAboutSections
          icon={<CiHeart />}
          number="Step 3"
          header="SAVE"
          text="Keep your favourite experiences for later."
          bgColor="bg-rose-50"
        />

</div>
{/* CTA TO ABOUT PAGE */}
<div className="flex flex-col items-center gap-3 justify-center md:mt-10">
  <p className=" text-gray-500 font-semibold">
    See how VoyaVista makes discovering the UK simpler.
  </p>

  <Link
    to="/about"
    className="
      mt-3
      inline-flex items-center gap-2
      rounded-full
      border border-teal-600
      px-6 py-3
      text-sm font-medium text-teal-700
      transition-all duration-300
      hover:bg-teal-600 hover:text-white
    "
  >
    About VoyaVista
    <IoMdArrowForward aria-hidden="true" />
  </Link>
</div>
     </section>
    )
}
export default AboutSection