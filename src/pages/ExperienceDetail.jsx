import { MapContainer, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Loader from "../components/Loader";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineEventAvailable } from "react-icons/md";


import { IoLocationOutline } from "react-icons/io5";
import { TbClockHour4 } from "react-icons/tb";
import {
  FaPersonWalking,
  FaCamera,
  FaLeaf,
  FaLandmark,
  FaArchway,
  FaBinoculars,
  FaPersonHiking,
  FaMountainSun,
  FaMountain,
  FaPerson,
  FaMasksTheater,
  FaBuildingColumns,
  FaChessRook,
  FaFlagCheckered,
  FaCar,
  FaCarSide,
  FaWineBottle,
  FaWineGlass,
  FaUtensils,
  FaPizzaSlice,
  FaCity,
  FaSeedling,
  FaTree,
  FaTrain,
  FaRoute,
  FaShip,
  FaAnchor,
  FaHandPointer,
} from "react-icons/fa6";
const activityIcons = {
  "Coastal walking": FaPersonWalking,
  Photography: FaCamera,
  Nature: FaLeaf,
  History: FaLandmark,
  Architecture: FaArchway,
  Sightseeing: FaBinoculars,
  Hiking: FaPersonHiking,
  "Mountain scenery": FaMountainSun,
  Geology: FaMountain,
  Archaeology: FaLandmark,
  Walking: FaPersonWalking,
  "Wax museum": FaPerson,
  Entertainment: FaMasksTheater,
  "Roman history": FaLandmark,
  Museum: FaBuildingColumns,
  Castle: FaChessRook,
  "Live shows": FaMasksTheater,
  Motorsport: FaFlagCheckered,
  Driving: FaCar,
  "Classic cars": FaCarSide,
  "Vineyard tour": FaWineBottle,
  "Wine tasting": FaWineGlass,
  Food: FaUtensils,
  "Cultural heritage": FaLandmark,
  "Village walk": FaPersonWalking,
  Heritage: FaLandmark,
  Pizza: FaPizzaSlice,
  Dining: FaUtensils,
  Manchester: FaCity,
  Gardens: FaSeedling,
  Rainforest: FaTree,
  "Steam train": FaTrain,
  "Scenic journey": FaRoute,
  "Boat cruise": FaShip,
  Scenery: FaMountainSun,
  "Maritime history": FaAnchor,
  "Interactive exhibits": FaHandPointer,
};
function ExperienceDetail() {
   const [experience, setExperience] = useState(null);
   const [loading, setLoading] = useState(true);
   const [liked, setLiked] = useState(false);

const [error, setError] = useState("");
   const baseUrl = import.meta.env.VITE_API_URL;
   const { slug } = useParams();
     console.log(slug);
useEffect(() => {
  async function getExperience() {
    try {
         setLoading(true);
  setError("");
      const response = await fetch(
        `${baseUrl}/experiences/${slug}`
      );
console.log("URL:", `${baseUrl}/experiences/${slug}`);
console.log("STATUS:", response.status);
      if (!response.ok) {
        throw new Error("Failed to fetch experience");
      }

      const data = await response.json();
      console.log("DATA:", data);
      setExperience(data);
    } catch (error) {
      setError("We couldn't load the experience. Please try again.")
      console.error(error);
    }
      finally {
      setLoading(false)
      
    }
  }

  getExperience();
}, [baseUrl, slug]);

if (loading) {
  return <Loader />;
}

if (error) {
  return <p>{error}</p>;
}

  return (
 <main className="mx-4">
  {/* herosection  */}
 <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] mt-5 lg:mt-10">
   {/* image  */}
  <div className=" w-full lg:px-4 ">
  <img
    className="w-full h-auto rounded-3xl "
    src={experience.image}
    alt={experience.alt}
  />
 </div>
 {/* text  */}
        <div className="relative flex flex-col  gap-2 mt-5  lg:mt-0 mx-2">
          {/* save icon   */}
          <button onClick={() => setLiked(!liked)} className="absolute  top-5 right-10 bg-gray-200/50  p-2 md:p-3  transition-all duration-200 hover:scale-[1.05] rounded-xl shadow">
           
            {!liked ? (<div className="flex gap-2 justify-center items-center "> <span className="text-gray-600">Save</span>
            <CiHeart className="text-gray-500 inline  text-xl" /></div>):(<div className="flex gap-2 justify-center items-center "> <span className="text-gray-600">Saved</span>
            <IoIosHeart className="text-red-600 inline  text-xl" /></div>)}
          </button>
          {/* header (title & location & activity)  */}
  <div className="mt-2 ">
     <p className="text-sm text-teal-700 mb-2 font-semibold">{experience.category.toUpperCase()}</p>
      <h1 className="text-2xl font-dm-serif-display font-semibold tracking-wide text-teal-800 ">{experience.title}</h1>
    <div className="flex gap-6 mt-2">
      <p className="text-sm text-teal-700 font-semibold">{experience.location}{" · "}{experience.region}</p>
      <p className="text-sm text-teal-700 font-semibold">{experience.country}</p>
     
    </div>
  </div>
  {/* description  */}
  <div className="lg:mt-10 mt-2 ">
    <p className="text-gray-700">{experience.long_description}</p>
  </div>
  {/*CTA */}

  <button className="flex w-1/3 mt-6 items-center justify-center gap-2 rounded-lg bg-teal-800 px-4 py-2 text-xs font-semibold text-gray-100 transition-all duration-200 hover:scale-[1.02] hover:bg-teal-700 md:text-base  ">
    Plan Your Visit
  </button>
{/* activities  */}
 <div className="flex flex-col gap-5 mt-10  ">
  <h2 className="font-bold text-teal-800">What You Experience</h2>
  <div className="flex gap-10">
    {experience.activities.map((activity) => {
  const Icon = activityIcons[activity];

  return (
    <div className="flex gap-2 items-baseline" key={activity}>
      <Icon className="text-teal-700 text-2xl " />
      <p className="font-semibold text-gray-600">{activity}</p>
    </div>
  );
})}
  </div>
 </div>




        </div>

 
</section>
{/* information section  */}
<section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 mt-10 mx-4">
  <div className="flex flex-col gap-3">
  <h3 className="font-bold text-teal-800">Practical Information</h3>
  <div className="flex flex-col gap-4">
    {/* price  */}
    <div className="flex space-x-5 items-center text-gray-700">
      <IoPricetagsOutline className="text-2xl text-teal-700"/>
     <div className="flex flex-col justify-center items-start">
       <span className="text-teal-800 font-semibold">Price</span>
      <p className="text-gray-700">£{" "}{experience.price}</p>
      
     </div>
    </div>
    {/* opening hours  */}
       <div className="flex space-x-5 items-center text-gray-700">
      <TbClockHour4 className="text-2xl text-teal-700"/>
     <div className="flex flex-col justify-center items-start">
       <span className="text-teal-800 font-semibold">Opening Hours</span>
      <p className="text-gray-700 ">{experience.opening_info}</p>
      
     </div>
    </div>
    {/* Address  */}
      <div className="flex space-x-5 items-center text-gray-700">
      <IoLocationOutline className="text-2xl text-teal-700"/>
     <div className="flex flex-col justify-center items-start">
       <span className="text-teal-800 font-semibold">Address</span>
      <p className="text-gray-700 ">{experience.address}</p>
      
     </div>
    </div>
    {/* official website  */}
     <div className="flex space-x-5 items-center text-gray-700">
      <CgWebsite className="text-2xl text-teal-700"/>
     <div className="flex flex-col justify-center items-start">
       <span className="text-teal-800 font-semibold">Official Website</span>
      <p className="text-gray-700 ">{experience.official_url}</p>
      
     </div>
    </div>
    {/* bookable  */}
    <div className="flex space-x-5 items-center text-gray-700">
      <MdOutlineEventAvailable className="text-2xl text-teal-700"/>
     <div className="flex flex-col justify-center items-start">
       <span className="text-teal-800 font-semibold">Bookable</span>
      <p className="text-gray-700 ">{experience.bookable ? "Yes" : "No"}</p>
      
     </div>
    </div>

  </div>
</div>
{/* map  */}
<div className="h-[350px] w-full overflow-hidden rounded-2xl">
  <MapContainer
    center={[55.9533, -3.1883]}
    zoom={13}
    className="h-full w-full"
  >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
</div>
</section>

 </main>
  );
}
export default ExperienceDetail;