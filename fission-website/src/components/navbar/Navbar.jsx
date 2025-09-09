import "./navbar.css";
import leo from "../../assets/leo.png";
import dark from "../../assets/theme-icon.gif";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../ThemeProvider";

const Navbar = ({ openService, openAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { toggleTheme } = useTheme();

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle service hover
  const handleServiceMouseEnter = () => {
    openService(true);
  };

  const handleServiceMouseLeave = () => {
    openService(false);
  };

  const handleAboutMouseEnter = () => {
    openAbout(true);
  };

  const handleAboutMouseLeave = () => {
    openAbout(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-20 bg-white border-b-1 text-black flex justify-between items-center px-4 sticky top-0 z-50">
      {/* left side logo and text */}
      <div
        className="w-1/4 text-center flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={leo} alt="logo" className="h-14 w-14" />
        <span className="epunda-sans-leo text-4xl">leo9 </span>
      </div>
      {/* right side navbar items */}
      <div className="w-3/4 hidden md:block">
        <ul className="flex justify-center items-center space-x-6 gap-8 ">
          <li className="font-semibold cursor-pointer hover:text-pink-500 transition duration-300">
            <a href="#"> Work</a>
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-pink-500 transition duration-300 "
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            Service
          </li>
          <li className="font-semibold cursor-pointer hover:text-pink-500 transition duration-300">
            <a href="#">Client</a>
          </li>
          <li
            className="font-semibold cursor-pointer "
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            About
          </li>
          <li className="font-semibold cursor-pointer hover:text-pink-500 transition duration-300">
            <a href="#">Knowledge</a>
          </li>
          <li className=" cursor-pointer ">
            <img src={dark} alt="theme" onClick={toggleTheme} />
          </li>
          <li>
            <button className="font-bold cursor-pointer px-10 py-2 border-2 border-black rounded-sm hover:bg-black  hover:text-white transition duration-300 ">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* dark theme*/}
      <img
        src={dark}
        alt="theme"
        className="md:hidden cursor-pointer"
        onClick={toggleTheme}
      />

      {/* hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute w-full top-20 right-1 bg-white border border-gray-200 rounded-md shadow-lg"
          >
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#">Work</a>
              </li>
              <li
                className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#">Service</a>
              </li>
              <li
                className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#">Client</a>
              </li>
              <li
                className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#">About</a>
              </li>
              <li
                className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#">Knowledge</a>
              </li>
              <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer flex justify-center">
                <button className="font-bold cursor-pointer px-10 py-2 border-2 border-black rounded-sm hover:bg-black  hover:text-white transition duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
