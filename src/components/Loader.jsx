function Loader({ fullScreen = false }) {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "min-h-[300px]"
      }`}
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div
          className="
            absolute inset-0
            animate-spin rounded-full
            border-[3px] border-gray-200
            border-t-teal-600
          "
        />

        <p className="font-pacifico text-lg text-teal-700">
          VoyaVista
        </p>
      </div>
    </div>
  );
}

export default Loader;