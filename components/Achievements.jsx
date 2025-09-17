import { Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Solved 200+ DSA problems on LeetCode & GFG",
      subtitle: "GFG Rating: 426000",
    },
    {
      title: "Completed Virtual Internship in Ethical Hacking",
      subtitle: "C-DAC Noida, Apr–May 2025",
    },
    {
      title: "Active contributor to open-source projects",
    },
    {
      title: "Participated in multiple coding competitions",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-[#0f172a] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="bg-orange-500 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                {item.subtitle && (
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
