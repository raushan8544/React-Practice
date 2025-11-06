import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-6">
        I’m a passionate Full Stack Developer skilled in front-end (React, HTML, CSS, Tailwind) and back-end (Node.js, Express, MongoDB) technologies.
        I love building modern, responsive, and interactive applications that provide smooth user experiences.
      </p>
      <div className="flex justify-center">
        <a
          href="/Raushan.CV.pdf"
          download="Raushan_Kumar_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
