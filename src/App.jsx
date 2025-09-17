import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe"; 

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}