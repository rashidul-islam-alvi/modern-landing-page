import React from "react";
import { MenuIcon } from "../../icons/Menu";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center pt-5 md:pt-10 ">
      <div className="flex items-center justify-around md:justify-between w-full p-2 md:p-5 border-t-[1px] border-b-[1px] border-[#e3e0ff]">
        <div className="">
          <h2 className="text-2xl font-bold text-white">Logo</h2>
        </div>
        <div>
          <ul className="hidden font-semibold text-white md:flex gap-x-10">
            <li className="cursor-pointer">SERVICES</li>
            <li className="cursor-pointer">PROJECTS</li>
            <li className="cursor-pointer">OPEN SOURCE</li>
            <li className="cursor-pointer">OUR BLOG</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </div>

        <div className="">
          <button className="px-2 md:px-10 py-1 md:py-2 bg-[#4031ce] text-white duration-300 ease-in-out hover:bg-[#3827C1] rounded-xl md:rounded-3xl">
            LET'S TALK
          </button>
        </div>
        <div className="block md:hidden">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
