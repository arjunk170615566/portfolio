import React from "react";

export default function Skills() {
  const technicalSkills = [
    { name: "C/C++", level: 85, color: "bg-purple-500" },
    { name: "Python", level: 80, color: "bg-orange-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-400" },
    { name: "Java", level: 70, color: "bg-pink-400" },
    { name: "Unreal Engine ", level: 85, color: "bg-blue-500" },
    { name: "HTML/CSS", level: 85, color: "bg-sky-400" },
    { name: "React", level: 75, color: "bg-orange-400" },
    { name: "MySQL", level: 70, color: "bg-red-400" },
    { name: "MongoDB", level: 65, color: "bg-green-300" },
  ];

  const tools = [
    "Git",
    "Unreal Engine",
    "GitHub",
    "Vercel",
    "Postman",
    "VS Code",
    "Flutter",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Technical Skills */}
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {technicalSkills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`${skill.color} h-2 rounded-full`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Technologies */}
      <h3 className="text-2xl font-bold text-center text-purple-400 mt-16 mb-8">
        Tools & Technologies
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition transform duration-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
