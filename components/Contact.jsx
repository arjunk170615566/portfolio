import React from "react";
import { Mail, Github, Linkedin, Code2 } from "lucide-react"; // Icons
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "arjunkumar1049@gmail.com",
      icon: Mail,
      bg: "bg-pink-500",
      link: "mailto:arjunkumar1049@gmail.com",
    },
    {
      title: "GitHub",
      value: "arjunk170615566",
      icon: Github,
      bg: "bg-gray-700",
      link: "https://github.com/arjunk170615566",
    },
    {
      title: "LinkedIn",
      value: "Arjun Kumar",
      icon: Linkedin,
      bg: "bg-blue-600",
      link: "https://linkedin.com/in/arjun-kumar-b607392b6",
    },
    {
      title: "LeetCode",
      value: "huntercode17",
      icon: Code2,
      bg: "bg-orange-500",
      link: "https://leetcode.com/huntercode17",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-pink-400 mb-12">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(236,72,153,0.3)", // glow effect
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-gray-800 p-6 rounded-2xl shadow-lg text-center cursor-pointer overflow-hidden"
              >
                {/* Icon with continuous + hover animation */}
                <motion.div
                  animate={{ x: [0, 15, 0] }} // 🚗 लगातार left-right move
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    y: 10, // hover पर ऊपर उठे
                    rotate: [ 8, 0], // हल्का हिले
                  }}
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl ${c.bg} mb-4`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.value}</p>

                {/* Background light animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-pink-400">Arjun Kumar</h3>
        <p className="text-gray-400">
          Computer Science Undergraduate & Developer
        </p>
        <div className="flex justify-center space-x-6 mt-4 text-gray-400 text-xl">
          {contacts.map((c, idx) => {
            const Icon = c.icon;
            return (
              <a
                key={idx}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
