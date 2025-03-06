"use client";

interface HeaderProps {}

import { useState, useEffect } from "react";

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsTransitioning(true);
    } else {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-between items-center w-full px-8 md:px-16 max-w-[1900px] mx-auto text-white py-6 z-50">
      <div className="flex items-center gap-4">
        <h3 className="text-4xl font-bold">Week-end</h3>
      </div>

      <div className="hidden md:flex items-center gap-7 md:gap-14 text-lg font-medium text-gray-300">
        <a
          href="#"
          className="cursor-pointer hover:text-gray-100 transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bg-gray-100 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Se connecter
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-gray-100 transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bg-gray-100 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          S'inscrire
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 transition-transform duration-300 ease-in-out hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300 rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {(isMenuOpen || isTransitioning) && (
        <div
          className={`absolute top-18 right-4 w-[calc(100%-2rem)] md:hidden z-50 bg-[#f3a71c]/80 backdrop-blur-md rounded-xl shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 -translate-y-4 max-h-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4 text-lg font-medium text-white">
            <a
              href="#"
              className="cursor-pointer hover:text-gray-300 transition-colors w-full text-center py-3 px-6 hover:bg-white/10 rounded-lg mx-2"
            >
              Se connecter
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-gray-300 transition-colors w-full text-center py-3 px-6 hover:bg-white/10 rounded-lg mx-2"
            >
              S'inscrire
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
