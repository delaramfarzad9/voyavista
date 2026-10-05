import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="flex  flex-col  bg-stone-200/50 gap-2 md:gap-4  text-teal-700  pt-8 mt-10 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start justify-evenly gap-4 md:gap-0 ">
{/* logo & motto  */}
<div className="flex flex-col space-y-2 md:space-y-4">
<Link className="font-pacifico md:text-3xl text-2xl text-teal-700" to="/">VoyaVista</Link>
          <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-teal-800">
  Voyage · Discover · Remember
</p>
  <p className="max-w-md text-sm text-gray-500">Discover remarkable places and experiences across the UK.</p> 

</div>
{/* explore  */}
<div className="flex flex-col md:gap-2 gap-1  ">
    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">EXLPORE</h2>
    <Link className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-600
  transition-colors duration-200
  hover:text-teal-700 text-sm font-normal text-gray-600 " >Explore experiences</Link>
    <Link className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-600
  transition-colors duration-200
  hover:text-teal-700 text-sm font-normal text-gray-600 " >About VoyaVista</Link>

</div>
{/* plan  */}
<div className="flex flex-col md:gap-2 gap-1 ">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">PLAN</p>
    <Link className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-600
  transition-colors duration-200
  hover:text-teal-700 text-sm font-normal text-gray-600 ">Book an experience</Link>
    <Link className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-600
  transition-colors duration-200
  hover:text-teal-700 text-sm font-normal text-gray-600 ">Saved experiences</Link>
</div>
            </div>
           
            {/* copy */}
            <div className="mt-2 border-t border-teal-800/15 py-3 md:py-5 ">
                <p className="text-center text-sm text-gray-500">&copy; 2026 VoyaVista. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer