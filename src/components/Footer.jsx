import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[var(--secondary-color)] to-[rgb(154, 183, 80)] w-full">
      <div
        style={{ justifyContent: "space-between" }}
        className="w-[80%] grid grid-cols-2 px-[1rem] md:grid-cols-3 m-auto pt-3"
      >
        <div className="w-[9rem] h-[10rem] flex flex-col">
          <p className="text-[var(--primary-color)] text-lg font-bold">Path</p>
          <Link to="/" className="hover:text-[var(--primary-color)]">
            Home
          </Link>

          <Link className="hover:text-[var(--primary-color)]">Exercises</Link>
          <Link className="hover:text-[var(--primary-color)]">Contact us</Link>
        </div>
        <div className="w-[9rem] h-[10rem] flex flex-col">
          <Link className="hover:text-[var(--primary-color)]">
            Cookies Policy
          </Link>
          <Link className="hover:text-[var(--primary-color)]">
            Privacy Policy
          </Link>
          <Link className="hover:text-[var(--primary-color)]">
            Terms and Conditions
          </Link>
        </div>
        <div className="w-[9rem] h-[10rem] flex flex-col mb-[3rem]">
          <p className="text-[1.3rem] md:text-[1.6rem] text-[var(--primary-color)] font-bold">
            Logo
          </p>
          <p>
            <BiPhoneCall />
            <span className="text-[var(--primary-color)]">+959421182623</span>
          </p>
          <p>
            <HiOutlineMail />
            <span className="text-[var(--primary-color)]">
              khantnyinyi.magnet@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
