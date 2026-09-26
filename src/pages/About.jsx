import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

function About() {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="
          px-5 py-16
          text-center
          md:px-10 md:py-24
          lg:px-20
        "
      >
        {/* eyebrow */}
        <p
          className="
            text-xs font-semibold
            tracking-[0.25em]
            text-teal-600
          "
        >
          ABOUT VOYAVISTA
        </p>

        {/* heading */}
        <h1
          className="
            mx-auto mt-4
            max-w-3xl
            font-dm-serif-display
            text-4xl
            leading-tight
            text-gray-900
            md:text-5xl
            lg:text-6xl
          "
        >
          Discover more,
          <span className="text-teal-700"> without going far.</span>
        </h1>

        {/* intro */}
        <p
          className="
            mx-auto mt-6
            max-w-2xl
            text-sm leading-7
            text-gray-500
            md:text-base
          "
        >
          VoyaVista brings together memorable experiences across the UK,
          helping you discover places that fit your interests, mood and
          budget.
        </p>
      </section>


      {/* =====================================================
          OUR PURPOSE
      ====================================================== */}
      <section
        className="
          mx-auto
          grid max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-5 pb-20
          md:grid-cols-2
          md:gap-16
          md:px-10 md:pb-28
          lg:px-16
        "
      >
        {/* image */}
        <div
          className="
            h-[380px]
            overflow-hidden
            rounded-3xl
            md:h-[520px]
          "
        >
          <img
            src="/images/sevensisters_hero.png"
            alt="Seven Sisters cliffs on the English coast"
            className="
              h-full w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.03]
            "
          />
        </div>

        {/* text */}
        <div className="md:px-4">
          <p
            className="
              text-xs font-semibold
              tracking-[0.2em]
              text-teal-600
            "
          >
            WHY VOYAVISTA
          </p>

          <h2
            className="
              mt-3
              font-dm-serif-display
              text-3xl
              text-gray-900
              md:text-4xl
            "
          >
            More than a destination.
          </h2>

          <p
            className="
              mt-6
              text-sm leading-7
              text-gray-500
              md:text-base
            "
          >
            A memorable experience doesn't always mean travelling far.
            From quiet villages and dramatic coastlines to historic cities
            and outdoor adventures, the UK offers something for every kind
            of escape.
          </p>

          <p
            className="
              mt-4
              text-sm leading-7
              text-gray-500
              md:text-base
            "
          >
            VoyaVista brings these experiences together in one place,
            making it easier to discover something that matches what
            you're looking for.
          </p>

          <Link
            to="/explore"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-teal-700
              transition-all
              duration-300
              hover:gap-3
            "
          >
            Explore experiences
            <IoMdArrowForward aria-hidden="true" />
          </Link>
        </div>
      </section>


      {/* =====================================================
          PERSONAL DISCOVERY
      ====================================================== */}
      <section className="bg-teal-50/50">
        <div
          className="
            mx-auto
            grid max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-5 py-20
            md:grid-cols-2
            md:gap-16
            md:px-10 md:py-24
            lg:px-16
          "
        >
          {/* text */}
          <div className="order-2 md:order-1 md:px-4">
            <p
              className="
                text-xs font-semibold
                tracking-[0.2em]
                text-teal-600
              "
            >
              YOUR KIND OF JOURNEY
            </p>

            <h2
              className="
                mt-3
                font-dm-serif-display
                text-3xl
                text-gray-900
                md:text-4xl
              "
            >
              Travel should feel personal.
            </h2>

            <p
              className="
                mt-6
                text-sm leading-7
                text-gray-500
                md:text-base
              "
            >
              Some days call for a peaceful countryside escape. Others
              call for history, adventure, a new city or a walk along the
              coast.
            </p>

            <p
              className="
                mt-4
                text-sm leading-7
                text-gray-500
                md:text-base
              "
            >
              That's why VoyaVista is designed around different tastes,
              moods and budgets — helping you narrow down the possibilities
              and find an experience that feels right for you.
            </p>
          </div>

          {/* image */}
          <div
            className="
              order-1
              h-[350px]
              overflow-hidden
              rounded-3xl
              md:order-2
              md:h-[480px]
            "
          >
            <img
              src="/images/stonehenge2_hero.png"
              alt="Stonehenge in Wiltshire"
              className="
                h-full w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          BUILT AROUND THE USER
      ====================================================== */}
      <section
        className="
          px-5 py-20
          md:px-10 md:py-24
          lg:px-20
        "
      >
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              text-xs font-semibold
              tracking-[0.2em]
              text-teal-600
            "
          >
            BUILT AROUND YOU
          </p>

          <h2
            className="
              mt-3
              font-dm-serif-display
              text-3xl
              text-gray-900
              md:text-4xl
            "
          >
            From discovery to experience.
          </h2>

          <p
            className="
              mt-4
              text-sm leading-7
              text-gray-500
              md:text-base
            "
          >
            Find somewhere that fits, keep the places that inspire you,
            and plan your next experience when you're ready.
          </p>
        </div>


        {/* features */}
        <div
          className="
            mx-auto mt-14
            grid max-w-5xl
            grid-cols-1
            gap-10
            md:grid-cols-3
            md:gap-14
          "
        >
          {/* Discover */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-teal-50
                text-2xl
                text-teal-700
              "
            >
              <IoSearchOutline aria-hidden="true" />
            </div>

            <h3
              className="
                mt-5
                text-sm font-semibold
                tracking-[0.15em]
                text-teal-800
              "
            >
              DISCOVER
            </h3>

            <p
              className="
                mx-auto mt-3
                max-w-xs
                text-sm leading-6
                text-gray-500
              "
            >
              Search and filter experiences based on what matters to you.
            </p>
          </div>


          {/* Save */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-emerald-50
                text-2xl
                text-teal-700
              "
            >
              <IoHeartOutline aria-hidden="true" />
            </div>

            <h3
              className="
                mt-5
                text-sm font-semibold
                tracking-[0.15em]
                text-teal-800
              "
            >
              SAVE
            </h3>

            <p
              className="
                mx-auto mt-3
                max-w-xs
                text-sm leading-6
                text-gray-500
              "
            >
              Keep your favourite experiences together and return to them
              whenever you're ready.
            </p>
          </div>


          {/* Book */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-amber-50
                text-2xl
                text-teal-700
              "
            >
              <SlCalender aria-hidden="true" />
            </div>

            <h3
              className="
                mt-5
                text-sm font-semibold
                tracking-[0.15em]
                text-teal-800
              "
            >
              BOOK
            </h3>

            <p
              className="
                mx-auto mt-3
                max-w-xs
                text-sm leading-6
                text-gray-500
              "
            >
              Choose the experience that feels right and start planning
              your visit.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-5 pb-20 md:px-10 md:pb-24 lg:px-20">
        <div
          className="
            mx-auto
            flex max-w-6xl
            flex-col
            items-center
            rounded-3xl
            bg-teal-800
            px-6 py-14
            text-center
            md:px-12 md:py-16
          "
        >
          <p
            className="
              text-xs font-semibold
              tracking-[0.2em]
              text-teal-200
            "
          >
            START YOUR NEXT JOURNEY
          </p>

          <h2
            className="
              mt-3
              font-dm-serif-display
              text-3xl
              text-white
              md:text-4xl
            "
          >
            Ready to find somewhere new?
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm leading-7
              text-teal-50/80
              md:text-base
            "
          >
            Explore experiences across the UK and find one that fits you.
          </p>

          <Link
            to="/explore"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6 py-3
              text-sm
              font-medium
              text-teal-800
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Start Exploring
            <IoMdArrowForward aria-hidden="true" />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default About;