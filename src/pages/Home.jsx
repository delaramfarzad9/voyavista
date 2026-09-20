
import HeroSection from "../components/HeroSection";
import FeaturedExperiences from "../components/FeaturedExperiences";
function Home() {
  return (
    <div>
     <main>
    <HeroSection/> 
    <p className="font-semibold text-center mt-5 text-2xl border border-gray-200 mx-auto p-4 shadow text-cyan-900 "> Handpicked for your next escape
          Discover remarkable places across the UK.</p>
    <FeaturedExperiences className="my-5"/> 
     </main>
    </div>
  );
}

export default Home;