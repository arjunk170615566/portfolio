import React, { useState, useEffect } from "react";

export default function Navbar() {
  // To handle scroll position and stickiness
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Toggle sticky navbar
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-8 py-6 bg-gray-950 shadow-xl transition-all duration-300 ${
        scrolled ? "fixed top-0 left-0 w-full z-50" : "relative"
      }`}
    >
      <h1 className="text-xl font-bold text-pink-500">AK</h1>
      <ul className="flex space-x-6 mx-auto tansparent bg-black/30 px-4 py-2 rounded-full">
        {["Home", "About", "Education", "Projects", "Skills", "Contact"].map(
          (item) => (
            <li key={item} className="relative group">
              <a
                href={"#" + item.toLowerCase()}
                className="text-white hover:text-pink-400 transition duration-300"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
