import { CiStar, CiLocationOn } from "react-icons/ci";
import {Link} from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";



function ExperienceCard({experience}) {
  const{
      id,
  image ,
  alt ,
  title ,
  location ,
  category ,
  price ,
  rating ,
  }=experience;
  const [liked, setLiked] = useState(false);
  function addToFavorites() {
    setLiked(!liked);
  }
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-stone-100 transition-colors duration-300 shadow-md ">
      {/* like icon  */}
      <button onClick={addToFavorites} className="absolute z-10 top-4 right-4 p-2 rounded-full  bg-gray-400/50 transition-transform duration-200 hover:scale-110 ">
       {liked ? <IoMdHeart className="text-2xl text-rose-700/90" /> : <CiHeart className="text-2xl text-white/90" />}
        </button>
        {/* image  */}
      <div className=" w-full overflow-hidden">
        <img
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          src={image || "/images/default_image.png"}
          alt={image? alt : ""}
          loading="lazy"
        />
      </div>
{/* content  */}
      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          {category}
        </p>

        <h2 className="line-clamp-1 text-lg font-bold text-teal-900">
          {title}
        </h2>

        <div className="flex items-center justify-between gap-2 text-sm text-gray-500">
          <p className="flex min-w-0 items-center gap-1">
            <CiLocationOn
              className="shrink-0 text-base text-teal-600"
              aria-hidden="true"
            />
            <span className="line-clamp-1">{location}</span>
          </p>

          <span className="flex shrink-0 items-center gap-1 font-semibold text-gray-600">
            <CiStar
              className="text-sm text-amber-500"
              aria-hidden="true"
            />
            {rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <p className=" text-base font-bold text-teal-600">
          
            £{price}
          </p>

          <Link   to={`/experiences/${id}`}
           
            className="whitespace-nowrap rounded-lg bg-teal-800 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:px-4"
          >
            View experience
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;