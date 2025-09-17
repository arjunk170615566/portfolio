import React from "react";

export default function Education() {
  const education = [
    {
      title: "B.Tech in Computer Science",
      place: "Dr. A.P.J Abdul Kalam Technical University",
      year: "2022 – 2026",
      details: "GPA: 6.5/10",
    },
    {
      title: "Intermediate",
      place: "S R K IC College",
      year: "2021",
      details: "72%",
    },
    {
      title: "High School",
      place: "S R K IC College",
      year: "2018",
      details: "",
    },
  ];

  return (
    <section id="education" className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
        Education Timeline
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`relative flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>

              {/* Card */}
              <div
                className={`bg-gray-800 p-6 rounded-xl shadow w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <h3 className="font-semibold text-white">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.place}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
                {edu.details && <p>{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
