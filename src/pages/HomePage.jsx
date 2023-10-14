import React from "react";
import Hero from "../components/Hero";
import Exercises from "../components/Exercises";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div className="mt-[6rem]">
      <Hero />
      <Exercises />
      <ContactUs />
    </div>
  );
};

export default HomePage;
