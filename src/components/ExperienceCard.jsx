import { CiStar, CiLocationOn } from "react-icons/ci";
import {Link} from "react-router-dom";


function ExperienceCard({
  id,
  image ,
  alt = "",
  title = "Food",
  location = "London",
  category = "Food",
  price = 96,
  rating = 4.5,
}) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors duration-300 hover:border-emerald-300">
      <div className="aspect-4/3 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          src={image || "/images/default_image.png"}
          alt={image? alt : ""}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
          {category}
        </p>

        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
          {title}
        </h2>

        <div className="flex items-center justify-between gap-2 text-sm text-gray-500">
          <p className="flex min-w-0 items-center gap-1">
            <CiLocationOn
              className="shrink-0 text-base text-emerald-600"
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
          <p className=" text-base font-bold text-emerald-700">
          
            £{price}
          </p>

          <Link   to={`/experiences/${id}`}
           
            className="whitespace-nowrap rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:px-4"
          >
            View experience
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;