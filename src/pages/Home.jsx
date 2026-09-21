
import HeroSection from "../components/HeroSection";
import FeaturedExperiences from "../components/FeaturedExperiences";
function Home() {
  return (
    <div>
     <main>
    <HeroSection/> 
  <section className="flex flex-col items-center justify-center">
      <p className="max-w-xl font-semibold text-left mt-10 text-2xl rounded-full mx-auto p-4 text-cyan-900 "> Handpicked for your next escape
          Discover remarkable places across the UK.</p>
    <FeaturedExperiences className="my-5 mx-4 md:mx-10 lg:mx-20"/> 
  </section>
     </main>
    </div>
  );
}

export default Home;