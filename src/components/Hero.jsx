import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "C++ Developer",
    "Python Programmer",
    "Web Developer",
    "AI/ML Enthusiast",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullWord = words[loopNum % words.length];
      if (isDeleting) {
        setCurrentWord(fullWord.substring(0, index - 1));
        setIndex(index - 1);
        setTypingSpeed(60);
      } else {
        setCurrentWord(fullWord.substring(0, index + 1));
        setIndex(index + 1);
        setTypingSpeed(120);
      }

      if (!isDeleting && index === fullWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-32 text-center bg-gradient-to-b from-purple-900 to-black"
    >
      {/* Profile Image */}
      <motion.img
        src="ak.png" // 👉 yaha apna image dalna
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-5xl font-bold text-pink-400"
      >
        Arjun Kumar
      </motion.h1>

      {/* Animated Text */}
      <p className="mt-4 text-xl text-purple-300 font-semibold h-8">
        {currentWord}
        <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
      </p>

      {/* Buttons with glow effect */}
      <div className="flex mt-8 space-x-6">
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(236,72,153,0.7)", // pink glow
          }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full text-lg shadow-lg transition"
        >
          Get In Touch
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(34,197,94,0.7)", // green glow
          }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-6 rounded-full text-lg shadow-lg transition"
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
}
