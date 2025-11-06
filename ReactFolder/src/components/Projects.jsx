import React from "react";

const projects = [
  {
    name: "Chat Application",
    tech: "MERN, Tailwind, OpenAI, Socket.io",
    desc: "Real-time chat app with AI-assisted replies and secure messaging.",
    github: "https://github.com/raushan8544/Chat-App.git",
  },
  {
    name: "Random GIF Generator",
    tech: "React, Tailwind, GIF API",
    desc: "Fetches and displays random GIFs dynamically.",
    github: "https://github.com/raushan8544/random-gif-starter.git",
  },
  {
    name: "E-commerce Website",
    tech: "React, CSS",
    desc: "A full-featured online shopping website with cart and checkout.",
    github: "https://github.com/raushan8544/E-commerce-Page.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div key={proj.name} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-gray-600 mb-2">{proj.tech}</p>
            <p className="text-gray-700 mb-4">{proj.desc}</p>
            <a href={proj.github} target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
