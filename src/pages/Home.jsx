
import HeroSection from "../components/HeroSection";
import FeaturedExperiences from "../components/FeaturedExperiences";
import SearchAndSuggestions from "../components/SearchAndSuggestions";
import AboutSection from "../components/AboutSection";


function Home() {
  return (
   
     <main className="mt-10">
    <HeroSection/> 
    {/* section2  */}
 <section className="flex flex-col  my-5 md:my-12 mx-4 md:mx-10">
  {/* header  */}
  <div className="text-center mb-6">
  <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
    Explore the UK
  </p>

  <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-teal-900">
    Find your next escape
  </h2>

  <p className="mt-2 text-sm md:text-base text-teal-800">
    Search destinations, landscapes and experiences across the UK.
  </p>
</div>
        
     
     {/* Search bar & Cards */}

     <div className=" flex flex-col gap-2 mt-4">

       <SearchAndSuggestions className=""/>
        <FeaturedExperiences className=""/>
     </div>
    
    </section>
    <AboutSection/>
 

     </main>
   
  );
}

export default Home;