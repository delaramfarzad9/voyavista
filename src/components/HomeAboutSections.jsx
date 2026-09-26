function HomeAboutSections({
  number,
  header,
  text,
  icon,
  bgColor
}) {
  return (
    <div
      className={`
        group
        flex h-64 w-64
        flex-col items-center justify-center
        rounded-full
        px-8
        text-center
        ${bgColor}
        transition-transform duration-300
        hover:-translate-y-1
      `}
    >
      {/* number */}
      <p className="text-xs font-medium tracking-[0.2em] text-teal-500">
        {number}
      </p>

      {/* icon */}
      <div className="mt-5 text-2xl text-teal-700">
        {icon}
      </div>

      {/* heading */}
      <h3 className="mt-2 text-sm font-semibold tracking-[0.14em] text-teal-800">
        {header}
      </h3>

      {/* description */}
      <p className="mt-4 max-w-44 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}

export default HomeAboutSections;