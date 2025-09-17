import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Automatic Car Parking Entry-Exit System",
    shortDesc: "AI/ML-powered system using Computer Vision",
    longDesc:
      "An AI/ML-powered system that automates car parking entry and exit processes using computer vision and machine learning algorithms.",
    date: "January 2025",
    tags: ["Python", "OpenCV", "ML", "AI"],
    codeLink: "https://github.com/arjunk170615566/automatic-car-parking-entry-exit-system",
  },
  {
    title: "Student Complaint Portal",
    shortDesc: "Web platform for student complaint management",
    longDesc:
      "A web-based platform designed to streamline student complaint management with user authentication, complaint tracking, and an administrative dashboard.",
    date: "February 2024",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    demoLink: "https://www.linkedin.com/posts/arjun-kumar-b607392b6_innovation-customerexperience-activity-7243143973135945728-vGIw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvtajgBT7FSINyo4Qd7NoJatxSuA0Q3I-8",
  },
];

export default function Projects() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-pink-400 mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-64 perspective"
            onMouseEnter={() => setFlipped(index)}
            onMouseLeave={() => setFlipped(null)}
          >
            {/* Card container */}
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-gray-800 p-6 rounded-2xl shadow-lg text-white backface-hidden">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{project.title}</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.shortDesc}</p>
                <div className="flex gap-2 mt-4 flex-wrap text-xs">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="bg-gray-600 px-2 py-1 rounded-full">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white rotate-y-180 backface-hidden">
                <button
                  className="absolute top-3 right-3 text-white hover:text-gray-200"
                  onClick={() => setFlipped(null)}
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2">{project.longDesc}</p>

                <div className="mt-4">
                  <p className="text-sm font-semibold">Technologies Used:</p>
                  <div className="flex gap-2 flex-wrap mt-2 text-xs">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-900 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full hover:bg-gray-700"
                    >
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-gray-200"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
