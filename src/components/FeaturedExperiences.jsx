import ExperienceCard from "./ExperienceCard"
import { featuredExperiences } from "../data/featuresExperiences"
import { Link } from "react-router-dom"
import { IoMdArrowForward } from "react-icons/io";
function FeaturedExperiences({className}) {
    return(
  <>
 {/* header  */}
     <div className="flex  justify-between">
         <span className="text-lg   text-nowrap  flex md:self-baseline-last  text-teal-700 
    font-bold
    ">Most Visited
        
      
      
    </span>
       <Link className=" flex md:self-baseline-last  text-teal-600 items-center  md:space-x-2 rounded-full border border-white/60
    bg-white/25 px-2 md:px-5 py-2 text-sm font-semibold shadow transition-all duration-300
    hover:bg-white/40 hover:shadow-xl hover:scale-[1.01]">
        
      <span className="text-xs md:text-base font-semibold text-nowrap ">More Experiences</span>
      <IoMdArrowForward className=" hidden md:flex"/>
    </Link>
  
     </div>

     <section className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ${className}`}>
  
{featuredExperiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
        {...experience}
        />
      ))}

     </section>   </>
    )

}
export default FeaturedExperiences
   