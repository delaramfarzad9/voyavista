import logo from "../../public/images/logo/logo6.png";
function Loader({ fullScreen = false }) {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "min-h-[300px]"
      }`}
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div
          className=" absolute inset-0   animate-spin rounded-full  border-[3px] border-gray-200
            border-t-teal-600 
          "
        />

        <img src={logo} alt="VoyaVista" className="h-10 w-auto" />
      </div>
    </div>
  );
}

export default Loader;
