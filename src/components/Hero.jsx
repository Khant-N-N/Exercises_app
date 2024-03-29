import React from "react";
import Img1 from "../assets/p1.png";
import dumb from "../assets/heroDumbbell copy.png";

const Hero = () => {
  return (
    <div className="flex justify-around h-[80vh] relative mt-7">
      <div className="flex font-ops justify-center flex-col items-center z-10">
        <div
          data-aos="zoom-in"
          className="h-[12rem] drop-shadow-[2px_35px_15px_black]"
        >
          <img src={dumb} alt="dumbbell" className="h-full" />
        </div>
        <p
          data-aos="fade-right"
          className="drop-shadow-[0_0_2px_white] text-[2rem] text-center"
        >
          Time to Change
        </p>
        <p
          data-aos="fade-right"
          className="drop-shadow-[0_0_2px_white] text-center"
        >
          stay strong, stay fit, live healthy
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="h-full hidden md:block drop-shadow-[-12px_15px_15px_black]"
      >
        <img src={Img1} alt="a man" className="h-full" />
      </div>
    </div>
  );
};

export default Hero;
