import React from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import Context from "../context/Context";

const Navbar = () => {
  const { handleKeyUp, searchRef, isType, setIsType } = useContext(Context);

  const handleCross = () => {
    setIsType(false);
    searchRef.current.value = "";
  };

  return (
    <nav className="flex w-full justify-between px-5 py-3 fixed top-0 z-[99] bg-[var(--secondary-opacity)]">
      <div>logo</div>
      <div className="flex relative">
        <input
          ref={searchRef}
          onKeyUp={handleKeyUp}
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded-md bg-[var(--primary-color)] text-white outline-none md:w-[20rem] w-[13rem]"
        />
        {isType ? (
          <RxCross2
            onClick={handleCross}
            className="absolute top-[25%] text-white right-[5%]"
          />
        ) : (
          <BiSearchAlt className="absolute text-white top-[25%] right-[5%]" />
        )}
      </div>
      <div className="gap-x-3 hidden md:flex">
        <NavLink
          className="font-bold mt-1 hover:text-[--primary-color]"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </NavLink>
        <NavLink
          className="font-bold mt-1 hover:text-[--primary-color]"
          to="/exercises"
          onClick={() => window.scrollTo(0, 0)}
        >
          Exercises
        </NavLink>
        <a
          className="font-bold mt-1 hover:text-[--primary-color]"
          href="#contact"
        >
          Contact Us
        </a>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
