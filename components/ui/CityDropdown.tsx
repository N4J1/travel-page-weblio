"use client";

import { useState } from "react";

interface CityDropdownProps {
  label: string;
  options: string[];
  defaultValue?: string;
}

const CityDropdown = ({ label, options, defaultValue }: CityDropdownProps) => {
  const [focused, setFocused] = useState(false);
  const [departure, setDeparture] = useState(defaultValue || options[0]);
  const [arrival, setArrival] = useState(defaultValue || options[1]);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const shouldFloatLabel = focused || departure || arrival;

  const swapValues = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  return (
    <div className="relative w-full font-sans">
      <label
        className={`absolute transition-all duration-200 px-1 z-10 ${
          shouldFloatLabel
            ? "text-sm -top-2 left-3 bg-white text-gray-500"
            : "text-base top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
        }`}
      >
        Où va-t-on ?
      </label>

      <div
        className="w-full border border-gray-300 rounded-lg p-3 bg-white shadow-sm"
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <div className="flex items-center w-full">
            <span className="text-gray-500 mr-1">Départ :</span>
            <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="font-semibold border-none bg-transparent focus:outline-none cursor-pointer flex-1"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-2 cursor-pointer" onClick={swapValues}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#504539"
                d="M7.72 21.78a.75.75 0 0 0 1.06-1.06L5.56 17.5h14.69a.75.75 0 0 0 0-1.5H5.56l3.22-3.22a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5Zm8.56-9.5a.75.75 0 1 1-1.06-1.06L18.44 8H3.75a.75.75 0 0 1 0-1.5h14.69l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5Z"
              ></path>
            </svg>
          </div>

          <div className="flex items-center w-full">
            <span className="text-gray-500 mr-1">Arrivée :</span>
            <select
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="font-semibold border-none bg-transparent focus:outline-none cursor-pointer flex-1"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDropdown;
