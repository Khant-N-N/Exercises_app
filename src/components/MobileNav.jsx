import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [click, setClick] = useState(false);
  const displayRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (displayRef.current && !displayRef.current.contains(event.target)) {
        setClick(false);
      }
    };
    // Add a click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <div
        ref={displayRef}
        className={`${
          click ? "rotate-360 right-0" : "right-[-50px] -rotate-90"
        } transition-all origin-top-right duration-300 z-10 absolute top-[2.3rem] flex flex-col gap-y-5 bg-[var(--primary-color)] text-white px-4 py-3 rounded`}
      >
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>

        <Link to="/exercises" onClick={() => window.scrollTo(0, 0)}>
          Exercises
        </Link>

        <a href="#contact" className="whitespace-nowrap">
          Contact us
        </a>
      </div>
      <button
        type="button"
        onClick={() => setClick(!click)}
        className="border border-[var(--primary-color)] p-2 rounded z-20 cursor-pointer focus:bg-[var(--primary-color)] focus:text-white"
      >
        {click ? <RxCross2 /> : <GiHamburgerMenu />}
      </button>
    </div>
  );
};

export default MobileNav;
