import {CiLocationOn} from "react-icons/ci";
import SearchBar from "../components/SearchBar";
import ExperienceCard from "../components/ExperienceCard";
import SearchSuggestions from "../components/SearchSuggestions";
import { useState,useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";


function ExperiencesPage() {
  const [experiences,setExperiences]=useState([]);
  const [loading,setLoading]=useState(true);
const [error,setError]=useState("");
const [search, setSearch] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);
const baseUrl = import.meta.env.VITE_API_URL;

useEffect(() => {
  async function getExperiences() {
    const url = `${baseUrl}/experiences?search=${encodeURIComponent(debouncedSearch)}`;
    console.log("Fetching:", url);


    try {
     setError("")
     const response = await fetch(url);
    
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
}, [baseUrl, debouncedSearch]);
  console.log("API experiences:", experiences);

  useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search.trim());
  }, 300);

  return () => {
    clearTimeout(timer);
  };
}, [search]);
console.log("Immediate:", search);
console.log("Debounced:", debouncedSearch);
function handleSearchChange(e) {
 
  setSearch(e.target.value);
   setShowSuggestions(true);
}

function handleSearchSubmit() {
  setDebouncedSearch(search.trim());
  setShowSuggestions(false);
}
  if (loading) {
  return <Loader />;
}


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
        <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-4">
 <SearchBar value={search} onChange={handleSearchChange}  onSubmit={handleSearchSubmit}  placeholder="Search experiences or destinations..." className=" rounded-lg  border-white border-2 lg:h-16" />
  {showSuggestions && search.trim() && (
    <div className="absolute top-full left-0 z-20 mt-1 w-full rounded-lg border border-gray-200 bg-gray-100 p-3 shadow-lg ">
      {experiences.length > 0 ? (experiences.slice(0, 5).map((experience) => (
        <Link key={experience.id} to={`/experiences/${experience.slug}`} className="flex w-full items-center gap-2 rounded-md p-3 text-teal-700 transition-colors hover:bg-teal-50 focus-visible:bg-teal-50">
          <CiLocationOn className="text-lg"/>
          <p >
            {experience.title}
          </p>
        </Link>
      ))): (
  <p className="p-3 text-sm text-gray-500">
    No matching experiences found.
  </p>)}
    </div>
  )}
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

    
    </main>
  );
}
export default ExperiencesPage;
