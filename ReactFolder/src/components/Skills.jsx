import React from "react";

const Skills = () => {
  const skills = [
    "React.js", "Redux", "Node.js", "Express.js", "MongoDB", "SQL",
    "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git", "GitHub"
  ];

  return (
    <section id="skills" className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
