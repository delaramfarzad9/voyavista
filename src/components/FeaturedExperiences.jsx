import ExperienceCard from "./experienceCard"
function FeaturedExperiences({className}) {
    return(
     <section className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ${className}`}>
<ExperienceCard/>
<ExperienceCard/>
<ExperienceCard/>
     </section>   
    )

}
export default FeaturedExperiences