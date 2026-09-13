import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import { IoMapOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";




function Navbar() {
const [isMenuOpen,setIsMenuOpen]=useState(false);
function closeMenu (){
  setIsMenuOpen(false)
}

  return (
   <header>
     <nav className="relative z-50 mx-4 my-4 lg:mx-20 max-w-7xl flex flex-row justify-between items-center ">
      {/* logo */}
      <Link className="font-pacifico md:text-3xl text-2xl text-emerald-800" to="/">VoyaVista</Link>
{/* desktop menu  */}
      <div className="hidden md:flex *:text-lg text-emerald-700 font-bold  flex-row  sm:gap-4 md:gap-6 lg:gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experiences">Explore</NavLink>
        <NavLink className="flex flex-row gap-1 justify-center items-center" to="/saved">
       <IoIosHeartEmpty/>
        Saved</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    {/* mobile menu */}
      {isMenuOpen ?  (<div className="absolute z-50 min-w-3/5 max-w-md bg-orange-100 rounded-md  top-0 left-0 flex flex-col  md:hidden">
      {/* close */}
         <button type="button" onClick={closeMenu} className="flex justify-end bg-emerald-900 rounded-t-md p-2 ">
          <IoMdClose className="text-white text-xl "/>
          </button>
          {/* links */}
          
         <div className="flex flex-col space-y-2 text-emerald-900 *:p-2  *:hover:bg-emerald-100 *:w-full *:flex *:flex-row *:justify-between *:items-center *:gap-2 *:text-lg *:font-bold "> 
          {/* home */}
          <NavLink  to="/" onClick={closeMenu}>
         <div className="flex flex-row gap-2 items-center">
           <IoHomeOutline/> <span>Home</span>
         </div>
          <IoChevronForwardSharp/></NavLink>
          {/* explore */}
        <NavLink to="/experiences" onClick={closeMenu}>
       <div className="flex flex-row gap-2 items-center">
         <IoMapOutline/>
       <span> Explore</span></div>
       <IoChevronForwardSharp/></NavLink>
          {/* saved */}
        <NavLink to="/saved" onClick={closeMenu}>
        <div className="flex flex-row gap-2 items-center">
          <IoIosHeartEmpty/>
       <span> Saved</span></div>
       <IoChevronForwardSharp/></NavLink>
          {/* about */}
        <NavLink to="/about" onClick={closeMenu}>
        <div className="flex flex-row gap-2 items-center"><IoIosInformationCircleOutline/> <span>About</span></div>
        <IoChevronForwardSharp/></NavLink>
          {/* booking */}
        <NavLink to="/booking" onClick={closeMenu}>
        <div className="flex flex-row gap-2 items-center">
          <SlCalender/>
          <span>Booking</span>
        </div>
        <IoChevronForwardSharp/></NavLink>
         </div>
      </div>) :  (<button onClick={()=>setIsMenuOpen(true)} className=" md:hidden">
        <IoMdMenu className="text-2xl  text-emerald-700"/>
      </button>)}
      {/* booking */}
      <NavLink className="hidden md:flex md:text-lg text-base text-emerald-700 font-bold " to="/booking">Booking</NavLink>
    </nav>
   </header>
  );
}

export default Navbar;