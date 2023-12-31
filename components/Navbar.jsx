"use client";
import React, { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Features", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Testimonials", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-sm w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-[#fdf2ec] py-4 md:px-10 px-7">
        
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img src="logo.png" alt="logo" className="w-36 " />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-3 cursor-pointer md:hidden " >
          {open ? "X" : "≡"}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 pr-8 absolute md:static bg-white  md:bg-[#fdf2ec] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base font-semibold  text-center md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-purple-800 duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className="bg-white w-full  text-black  font-bold py-2 px-6 rounded-lg md:ml-8 hover:border-black border  duration-500"
          >
Buy Template          </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
