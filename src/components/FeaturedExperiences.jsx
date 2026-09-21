import ExperienceCard from "./ExperienceCard"
import { featuredExperiences } from "../data/featuresExperiences"
function FeaturedExperiences({className}) {
    return(
     <section className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ${className}`}>
{featuredExperiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
        {...experience}
        />
      ))}

     </section>   
    )

}
export default FeaturedExperiences