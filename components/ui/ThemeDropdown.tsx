"use client";

import React, { useState, useRef, useEffect } from "react";

interface ThemeDropdownProps {
  label: string;
  defaultValue?: string;
}

const ThemeDropdown: React.FC<ThemeDropdownProps> = ({
  label,
  defaultValue = "Sportif",
}) => {
  const [focused, setFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(defaultValue);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const themeOptions = [
    "Sportif",
    "Culturel",
    "Gastronomique",
    "Détente",
    "Aventure",
    "Romantique",
    "Familial",
    "Nature",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full font-sans">
      <label className="absolute transition-all duration-200 px-1 z-10 pointer-events-none text-sm -top-2 left-3 bg-white text-gray-500">
        {label}
      </label>

      <div
        ref={inputRef}
        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="font-bold text-gray-900">{selectedTheme}</span>
      </div>

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute z-20 top-full mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden"
        >
          <div className="max-h-60 overflow-y-auto">
            {themeOptions.map((theme) => (
              <div
                key={theme}
                className={`px-4 py-2 cursor-pointer hover:bg-[#f3a71c]/10 ${
                  theme === selectedTheme ? "bg-[#f3a71c]/30 font-bold" : ""
                }`}
                onClick={() => {
                  setSelectedTheme(theme);
                  setShowDropdown(false);
                }}
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
