import OptionCards from "../components/OptionCards";
import SearchBar from "../components/SearchBar";
import ExperienceCard from "../components/ExperienceCard";
import SearchSuggestions from "../components/SearchSuggestions";
import { useState,useEffect } from "react";


import experiencesOptionCards from "../data/experiencesOptionCards";

function ExperiencesPage() {
  const [experiences,setExperiences]=useState([]);
  const [loading,setLoading]=useState(true);
const [error,setError]=useState("");
const baseUrl = import.meta.env.VITE_API_URL;

useEffect(() => {
  async function getExperiences() {
    try {
     setError("")
      const response =await fetch(`${baseUrl}/experiences`)
    
if(!response.ok){
  throw new Error ("Failed to fetch experiencesl");
}
const data =await response.json();
setExperiences(data);
      
   

     
    } 
       catch(err){
        console.error(err);
      setError("We couldn't load the experiences. Please try again.")
      }
    finally {
      setLoading(false)
      
    }
  }

  getExperiences();
}, [baseUrl]);
  console.log("API experiences:", experiences);

  return (
    <main className="flex flex-col gap-2 mx-4 mt-4 mb-5">
      {/* header  section  */}
      <section className="flex flex-col gap-4 mb-5">
        <p className="text-teal-600 text-lg">DISCOVER THE UK</p>
        <h1 className="text-5xl font-semibold text-teal-700 font-dm-serif-display tracking-wide">
          Find your kind of adventure.
        </h1>
        <p className="text-gray-500 text-lg">Explore unforgettable experiences, from coastal escapes to historic cities.</p>
      </section>
      {/* Search section  */}
    <section className="flex flex-col gap-4 items-center border-b p-5 border-gray-300">
        {/* searchBar */}
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
 <SearchBar placeholder="Search experiences or destinations..." className=" rounded-lg  border-white border-2 lg:h-16" />
        </div>
     
      {/* search suggestions  */}
     <div className="flex gap-4 overflow-x-auto  py-3 scrollbar-thumb-teal-600 scrollbar-thin px-1 *:shrink-0 mx-auto w-full max-w-4xl">
       <SearchSuggestions title="All experiences" variant="active"/>
      <SearchSuggestions title="Nature & outdoors" />
      <SearchSuggestions title="Culture" />
      <SearchSuggestions title="Food & drink" />
      <SearchSuggestions title="City tours" />
     </div>
    </section>
      {/* Explore  section */}
      <section>
        {/* heading  */}
  <div className="flex justify-between items-center">
    
   <div>
         <h2 className="text-xl  text-emerald-700 mt-5 font-semibold">
          Explore experiences
        </h2>
        {!loading && !error && (
  <p className="text-gray-600">
    {experiences.length} experiences found
  </p>
)}
     </div>
     {/* filters icon  */}
     <div className="flex space-x-4 items-center border border-gray-300 rounded-lg px-3 py-2 hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-gray-700">
      <button>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
       <span className=""> Filters</span>
   

      </button>
     </div>
  </div>

{/* CARDS  */}
<section className="md:mt-5 mt-3 grid grid-cols-1 gap-4  lg:grid-cols-3 md:grid-cols-2 ">
{experiences.map((experience)=>(<ExperienceCard
key={experience.id} experience={experience}
/>))}
</section>





















   </section>

        {/* <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:mx-44 gap-2 my-4">
          {experiencesOptionCards.map((card) => (
            <OptionCards
              key={card.id}
              title={card.title}
              iconTag={card.iconTag}
            />
          ))}
        </div> */}
     
      


      {/* <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ExperienceCard
          title="Street Food Tour"
          location="London, UK"
          category="Food"
          price={96}
          rating={4.5}
        />
        <ExperienceCard
          title="Sunset Sailing"
          location="Santorini, Greece"
          category="Adventure"
          price={140}
          rating={4.8}
        />
        <ExperienceCard
          title="Old Town Walking Tour"
          location="Lisbon, Portugal"
          category="Culture"
          price={45}
          rating={4.6}
        />
        <ExperienceCard
          title="Mountain Hiking"
          location="Interlaken, Switzerland"
          category="Outdoor"
          price={120}
          rating={4.9}
        />
      </section> */}
    </main>
  );
}
export default ExperiencesPage;
