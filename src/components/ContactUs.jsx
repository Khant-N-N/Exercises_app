import React from "react";
import img from "../assets/p2.jpg";
import { IoIosPaperPlane } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div id="contact" className="mt-[3rem]">
      <h3 className="text-center font-ops text-[2rem]">Contact Us</h3>
      <div className="flex relative lg:max-h-[100vh] justify-center border border-[var(--primary-color)] rounded-lg mx-auto my-4">
        <div className="w-[100%] md:w-[50%] relative">
          <img src={img} alt="gym girl" className="rounded h-full" />
          <div className="xl:w-[75%] w-[100%] h-full top-0 rounded absolute bg-gradient-to-r from-black/30 to-[var(--bg-color)]"></div>
        </div>

        <div className="absolute top-3 sm:top-[15rem] md:top-0 md:relative gap-y-4 flex flex-col items-center justify-center w-[100%] md:w-[50%] px-3">
          <div className="flex flex-col items-center w-full gap-y-2">
            <input
              type="text"
              className="bg-[--card-bg] border border-[var(--primary-color)] w-full rounded outline-none px-2 py-4"
              placeholder="Enter Your Name(optional)"
            />
            <textarea
              className="bg-[--card-bg] border border-[var(--primary-color)] w-full rounded outline-none px-2 py-4"
              placeholder="Message"
            />
            <button className="flex justify-center px-4 py-2 rounded bg-[var(--primary-color)] text-white hover:bg-[var(--primary-opacity)]">
              <IoIosPaperPlane className="mt-1 mr-2" /> Send Message
            </button>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-[var(--secondary-opacity)] w-[70%] rounded py-3 px-4 text-center text-[1rem]"
          >
            <HiOutlineMail className="text-[2rem] inline" />
            <p className="font-bold">Email Us</p>
            <p>
              <span className="text-[var(--primary-color)] font-bold">
                khantnyinyi.magnet@gmail.com
              </span>{" "}
              Interactively grow ideas for cross-platform models.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-[var(--secondary-opacity)] w-[70%] rounded py-3 px-4 text-center text-[1rem]"
          >
            <BiPhoneCall className="text-[2rem] inline" />
            <p className="font-bold">Call Us</p>
            <p>
              <span className="text-[var(--primary-color)] font-bold">
                +959 421 182 623
              </span>{" "}
              Distinctively exploit optimal alignments for intuitive bandwidth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
