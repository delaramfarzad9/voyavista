import OptionCards from "../components/OptionCards";
import SearchBar from "../components/SearchBar";
import ExperienceCard from "../components/ExperienceCard";
import SearchSuggestions from "../components/SearchSuggestions";


import experiencesOptionCards from "../data/experiencesOptionCards";

function ExperiencesPage() {
  return (
    <main className="flex flex-col gap-2 mx-4 mt-4 mb-5">
      {/* header    */}
      <section className="flex flex-col gap-4 mb-5">
        <p className="text-teal-600 text-lg">DISCOVER THE UK</p>
        <p className="text-5xl font-semibold text-teal-700 font-dm-serif-display tracking-wide">
          Find your kind of adventure.
        </p>
        <p className="text-gray-500 text-lg">Explore unforgettable experiences, from coastal escapes to historic cities.</p>
      </section>
      {/* Search section  */}
    <section className="flex flex-col gap-4 border-b p-5 border-gray-300">
        {/* searchBar */}
      <SearchBar placeholder="Search experiences or destinations..." className="rounded-lg  border-white border-2 lg:h-16" />
      {/* search suggestions  */}
     <div className="flex gap-4">
       <SearchSuggestions title="All experiences" variant="active"/>
      <SearchSuggestions title="Nature & outdoors" />
      <SearchSuggestions title="Culture" />
      <SearchSuggestions title="Food & drink" />
      <SearchSuggestions title="City tours" />
     </div>
    </section>
      {/* explore  section */}
      <section>
  <div className="flex justify-between">
    {/* heading  */}
   <div>
         <p className="text-xl  text-emerald-700 mt-5 font-semibold">
          Explore experiences
        </p>
        <p className="text-gray-600"><span>24</span> experiences found</p>
     </div>
     {/* filters icon  */}
     <div>
      <button></button>
     </div>
  </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:mx-44 gap-2 my-4">
          {experiencesOptionCards.map((card) => (
            <OptionCards
              key={card.id}
              title={card.title}
              iconTag={card.iconTag}
            />
          ))}
        </div>
      </section>
      {/* experinces section */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>
    </main>
  );
}
export default ExperiencesPage;
