import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full shadow border-b-1 border-neutral-300">
      <div className="px-5% flex w-full max-w-screen-xl mx-auto justify-between h-72px items-center">
        <Link to={"/"} className="flex items-center gap-1">
          <img className="h-16" src={logo} alt="Asmi life Logo" />
          {/* <p className="text-3xl font-semibold font-poppins text-neutral-900">
            asmi
          </p> */}
        </Link>

        <div className="hidden md:flex">
          <ul className="flex max-w-xl gap-8 font-semibold lg:max-w-full text-neutral-900">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition flex duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 flex transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/how-it-works"}
              >
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition flex duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/about-us"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition flex duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/counselors"}
              >
                Counselors
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition flex duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/blogs"}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-100 flex py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/contact-us"}
              >
                Contact Us
              </NavLink>
            </li>
            {/* Add more navigation links */}
          </ul>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className=" text-neutral-900 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {isOpen && (
        <div className="w-full py-4 bg-white ">
          <ul className="flex flex-col items-center gap-2 font-semibold text-neutral-900">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/how-it-works"}
              >
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/about-us"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/counselors"}
              >
                Counselors
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/blogs"}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:bg-neutral-200 transition duration-300 py-1 px-2 rounded ease-in-out " +
                    (isActive ? "text-primary03" : "")
                  );
                }}
                to={"/contact-us"}
              >
                Contact us
              </NavLink>
            </li>

            {/* Add more navigation links */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;
