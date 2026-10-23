import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { PiHeartStraightBold } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import logo from "../../public/images/logo/logo6.png";

const focusStyles =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";

function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const logoRef = useRef(null);
  const lastLinkRef = useRef(null);
  function closeMenu() {
    setIsMenuOpen(false);
  }
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event) {
      // Escape closes the menu
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const logo = logoRef.current;
      const button = menuButtonRef.current;
      const firstLink = firstLinkRef.current;
      const lastLink = lastLinkRef.current;
      const active = document.activeElement;

      if (!logo || !button || !firstLink || !lastLink) return;

      // Tab from X → Home
      if (!event.shiftKey && active === button) {
        event.preventDefault();
        firstLink.focus();
      }

      // Tab from Booking → Logo
      else if (!event.shiftKey && active === lastLink) {
        event.preventDefault();
        logo.focus();
      }

      // Shift + Tab from Home → X
      else if (event.shiftKey && active === firstLink) {
        event.preventDefault();
        button.focus();
      }

      // Shift + Tab from X → Logo
      else if (event.shiftKey && active === button) {
        event.preventDefault();
        logo.focus();
      }

      // Shift + Tab from Logo → Booking
      else if (event.shiftKey && active === logo) {
        event.preventDefault();
        lastLink.focus();
      }

      // Recover if focus reaches the background page
      else if (
        active !== logo &&
        active !== button &&
        !firstLink.closest("#mobile-menu")?.contains(active)
      ) {
        event.preventDefault();
        firstLink.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleBreakpointChange(event) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      className=" h-16 sticky  top-0 left-0 right-0 z-50   backdrop-blur-xl bg-stone-200/50    transition-colors duration-300
    shadow-lg "
    >
      <motion.nav
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.5,
          ease: "easeOut",
        }}
        className="relative z-50 h-full mx-auto max-w-7xl flex flex-row justify-between items-center px-4 md:px-6 lg:px-8"
      >
        {/* logo */}
        <Link
          ref={logoRef}
          to="/"
          onClick={closeMenu}
          className={` duration-300 transition-all hover:scale-95 rounded-sm ${focusStyles}`}
        >
          <img src={logo} alt="VoyaVista" className="h-12 w-auto" />
        </Link>
        {/* desktop menu  */}
        <div className="hidden md:flex *:text-lg text-teal-800 *:hover:text-teal-600 delay-200  transition-all   flex-row  sm:gap-4 md:gap-6 lg:gap-8 font-semibold *:tracking-[0.04em] font-jost">
          <NavLink to="/" className={`rounded-sm  ${focusStyles}`}>
            Home
          </NavLink>
          <NavLink to="/experiences" className={`rounded-sm ${focusStyles}`}>
            Explore
          </NavLink>
          <NavLink
            className={`flex flex-row gap-1 justify-center items-center ${focusStyles}`}
            to="/saved"
          >
            <PiHeartStraightBold aria-hidden="true" />
            Saved
          </NavLink>
          <NavLink to="/about" className={`rounded-sm ${focusStyles}`}>
            About
          </NavLink>
        </div>
        {/* Mobile menu */}
        {createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: shouldReduceMotion ? 0 : 0.12 },
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                }}
                className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden"
              >
                {/* Backdrop */}
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  tabIndex={-1}
                  className="absolute inset-0 bg-black/30 backdrop-blur-md"
                />

                {/* Mobile navigation */}
                <motion.nav
                  inert={!isMenuOpen}
                  id="mobile-menu"
                  aria-label="Mobile navigation"
                  initial={{
                    y: shouldReduceMotion ? 0 : -16,
                  }}
                  animate={{
                    y: 0,
                  }}
                  exit={{
                    y: shouldReduceMotion ? 0 : -16,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    ease: "easeOut",
                  }}
                  className="relative z-10 w-full bg-sky-50 p-6 shadow-xl"
                >
                  <div className="flex flex-col gap-2 text-teal-800">
                    <NavLink
                      ref={firstLinkRef}
                      to="/"
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-lg p-3 hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600  ${focusStyles}`}
                    >
                      <span className="flex items-center gap-3">
                        <IoHomeOutline aria-hidden="true" />
                        Home
                      </span>
                      <IoChevronForwardSharp aria-hidden="true" />
                    </NavLink>

                    <NavLink
                      to="/experiences"
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-lg p-3 hover:bg-teal-100 ${focusStyles}`}
                    >
                      <span className="flex items-center gap-3">
                        <IoMapOutline aria-hidden="true" />
                        Explore
                      </span>
                      <IoChevronForwardSharp aria-hidden="true" />
                    </NavLink>

                    <NavLink
                      to="/saved"
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-lg p-3 hover:bg-teal-100 ${focusStyles}`}
                    >
                      <span className="flex items-center gap-3">
                        <IoIosHeartEmpty aria-hidden="true" />
                        Saved
                      </span>
                      <IoChevronForwardSharp aria-hidden="true" />
                    </NavLink>

                    <NavLink
                      to="/about"
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-lg p-3 hover:bg-teal-100 ${focusStyles}`}
                    >
                      <span className="flex items-center gap-3">
                        <IoIosInformationCircleOutline aria-hidden="true" />
                        About
                      </span>
                      <IoChevronForwardSharp aria-hidden="true" />
                    </NavLink>

                    <div className="mt-4 border-t border-teal-100 pt-4">
                      <NavLink
                        ref={lastLinkRef}
                        to="/booking"
                        onClick={closeMenu}
                        className={`flex w-full items-center justify-center gap-3 rounded-lg bg-teal-800 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700  ${focusStyles}`}
                      >
                        <SlCalender aria-hidden="true" />
                        <span>Book Your Experience</span>
                      </NavLink>
                    </div>
                  </div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}

        {/* One permanent animated button */}
        <button
          type="button"
          ref={menuButtonRef}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`flex size-11 items-center justify-center rounded-lg text-teal-700 md:hidden ${focusStyles}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: shouldReduceMotion ? 0 : -90,
                scale: shouldReduceMotion ? 1 : 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: shouldReduceMotion ? 0 : 90,
                scale: shouldReduceMotion ? 1 : 0.8,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              {isMenuOpen ? (
                <IoMdClose aria-hidden="true" className="text-2xl" />
              ) : (
                <IoMdMenu aria-hidden="true" className="text-2xl" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
        {/* booking */}
        <NavLink
          to="/booking"
          className={` hidden md:flex items-center rounded-full border border-teal-700/20
    bg-white/25 px-5 py-2 text-sm font-semibold text-teal-800  backdrop-blur-xl
    shadow-lg shadow-black/10 transition-all duration-300 hover:bg-white/40
    hover:text-teal-600 hover:shadow-xl  hover:-translate-y-0.5 tracking-[0.04em] ${focusStyles}`}
        >
          Book Your Experience
        </NavLink>
      </motion.nav>
    </header>
  );
}

export default Navbar;
