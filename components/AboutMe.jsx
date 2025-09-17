import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-purple-900 text-white"
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(168,85,247,0.4)", // purple glow
        }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto px-6 text-center rounded-3xl bg-black/40 p-10 shadow-lg"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-pink-400 mb-10"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Motivated and detail-oriented Computer Science undergraduate with
          hands-on experience in programming, web development, and database
          management. Proficient in multiple programming languages including
          <span className="text-pink-400 font-semibold"> C++</span>,{" "}
          <span className="text-yellow-400 font-semibold">Python</span>,{" "}
          <span className="text-blue-400 font-semibold">Java</span>, and{" "}
          <span className="text-green-400 font-semibold">JavaScript</span>.
          Passionate about solving complex problems and creating innovative
          solutions through technology. Currently pursuing{" "}
          <span className="text-purple-400 font-semibold">
            B.Tech in Computer Science Engineering
          </span>{" "}
          with a focus on artificial intelligence and machine learning
          applications.
        </p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(236,72,153,0.6)", // pink glow
            }}
            className="p-6 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
          >
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="mt-2 text-lg">DSA Problems Solved</p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)", // blue glow
            }}
            className="p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
          >
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="mt-2 text-lg">Years of Experience</p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(34,197,94,0.6)", // green glow
            }}
            className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg"
          >
            <h3 className="text-3xl font-bold">5+</h3>
            <p className="mt-2 text-lg">Projects Completed</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
