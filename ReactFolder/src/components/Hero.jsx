import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-24 md:pt-32 pb-10 bg-gradient-to-r from-blue-50 to-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Raushan Kumar</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Full Stack Developer specializing in building dynamic, responsive web apps using the MERN stack.
        </p>
        <a href="https://github.com/raushan8544" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          View My Work
        </a>
      </div>
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img src={profile} alt="Profile" className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto border-4 border-blue-500" />
      </div>
    </section>
  );
};

export default Hero;
