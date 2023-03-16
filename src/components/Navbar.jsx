import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700">
      <ul className="hidden sm:flex px-4 ">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="#clients">Client List</a>
        </li>
        <li>
          <a href="#equipment">Equipment</a>
        </li>
        <li>
          <a href="#bookings">Bookings</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li classname="text-2xl py-8">
              <a href="/">Home</a>
            </li>
            <li classname="text-2xl py-8">
              <a href="#blog">Blog</a>
            </li>
            <li classname="text-2xl py-8">
              <a href="#clients">Client List</a>
            </li>
            <li classname="text-2xl py-8">
              <a href="#equipment">Equipment</a>
            </li>
            <li classname="text-2xl py-8">
              <a href="#bookings">Bookings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;