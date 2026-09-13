import OptionCards from "../components/OptionCards";
import SearchBar from "../components/SearchBar";
import ExperienceCard from "../components/ExperienceCard";

import experiencesOptionCards from "../data/experiencesOptionCards";

function ExperiencesPage() {
  return (
    <main className="mx-4 mt-4 mb-5">
      {/* header    */}
      <div className="flex flex-col gap-4">
        
        <p className="text-lg font-semibold text-green-700 font-dm-serif-display tracking-wide">
          Discover experiences worth remembering.
        </p>
      </div>
      {/* searchBar */}
      <SearchBar />
      {/* explore section */}
      <section>
        <p className="text-xl tracking-wide text-emerald-700 ">
          Explore experiences
        </p>
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
