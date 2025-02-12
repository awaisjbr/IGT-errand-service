import React, { useState } from "react";
// import logo from "../assets/logoo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="h-16 flex items-center fixed w-full top-0 left-0 bg-gradient-to-t from-lime-400 to-green-400 px-5 z-50">
      <div className="w-full flex items-center justify-between relative">
        <div className="logo flex items-center gap-3">
          <img className="w-32 lg:w-40" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/bc7bd19cc2e6cdbd245e434875a463f6/detailed" alt="" />
          {/* <h3 className="text-white font-poppins">IGT</h3> */}
        </div>
        <div className="text-white text-3xl cursor-pointer lg:hidden">
          {mobileMenu ? <FaXmark onClick={() => setMobileMenu(false)}/> : <FaBars onClick={() => setMobileMenu(true)} />}
        </div>
        {mobileMenu && (
          <div className="absolute right-0 top-[68px] w-48 flex justify-center bg-[tomato] p-3 rounded-md">
            <ul className="flex flex-col items-center gap-2 text-white text-2xl w-full">
              <NavLink to={"/"}><li className="hover:bg-cyan-600 font-poppins w-full py-1 tracking-wider rounded-md text-center" onClick={() => setMobileMenu(false)}>Home</li></NavLink>
              <NavLink to={"/service"}><li className="hover:bg-cyan-600 font-poppins w-full py-1 tracking-wider rounded-md text-center" onClick={() => setMobileMenu(false)}>Services</li></NavLink>
              <NavLink to={"/about"}><li className="hover:bg-cyan-600 font-poppins w-full py-1 tracking-wider rounded-md text-center" onClick={() => setMobileMenu(false)}>About</li></NavLink>
              <NavLink to={"/contact"}><li className="hover:bg-cyan-600 font-poppins w-full py-1 tracking-wider rounded-md text-center" onClick={() => setMobileMenu(false)}>Contact Us</li></NavLink>
            </ul>
          </div>
        )}
        <div className="hidden lg:block">
          <ul className="flex gap-10 text-xl">
            <NavLink to={"/"}><li className="text-white font-poppins hover:bg-[tomato] font-semibold tracking-wide py-1 w-[100px] text-center rounded-lg transition-all duration-500">Home</li></NavLink>
            <NavLink to={"/service"}><li className="text-white font-poppins hover:bg-[tomato] font-semibold tracking-wide py-1 w-[100px] text-center rounded-lg transition-all duration-500">Services</li></NavLink>
            <NavLink to={"/about"}><li className="text-white font-poppins hover:bg-[tomato] font-semibold tracking-wide py-1 w-[100px] text-center rounded-lg transition-all duration-500">About</li></NavLink>
            <NavLink to={"/contact"}><li className="text-white font-poppins hover:bg-[tomato] font-semibold tracking-wide py-1 w-[100px] text-center rounded-lg transition-all duration-500">Contact</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;