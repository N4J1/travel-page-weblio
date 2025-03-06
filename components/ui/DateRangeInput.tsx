"use client";

import React, { useState, useRef, useEffect } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRangeInputProps {
  label: string;
}

const DateRangeInput: React.FC<DateRangeInputProps> = ({ label }) => {
  const [focused, setFocused] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 0),
    key: "selection",
  });
  
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const formattedStartDate = format(dateRange.startDate, "dd MMM yy");
  const formattedEndDate = format(dateRange.endDate, "dd MMM yy");
  const displayValue = `${formattedStartDate} - ${formattedEndDate}`;

  const handleSelect = (ranges: RangeKeyDict) => {
    setDateRange(ranges.selection);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current && 
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCalendarPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const isNearBottom = window.innerHeight - rect.bottom < 400;
      
      if (isNearBottom) {
        return "bottom-full mb-2";
      }
    }
    return "top-full mt-2";
  };

  return (
    <div className="relative w-full font-sans">
      <label
        className={`absolute transition-all duration-200 px-1 z-10 pointer-events-none ${
          true
            ? "text-sm -top-2 left-3 bg-white text-gray-500"
            : "text-base top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
        }`}
      >
        {label}
      </label>

      <div
        ref={inputRef}
        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex items-center cursor-pointer"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="font-bold text-gray-900">{displayValue}</span>
      </div>

      {showCalendar && (
        <div
          ref={calendarRef}
          className={`absolute z-20 bg-white shadow-lg rounded-md overflow-hidden ${getCalendarPosition()}`}
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          <DateRange
            ranges={[dateRange]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            months={isMobile ? 1 : 2}
            direction="horizontal"
            showDateDisplay={false}
            showMonthAndYearPickers={true}
            rangeColors={["#f3a71c"]}
            className="p-2"
            minDate={new Date()}
          />
          <div className="flex justify-end p-8">
            <button 
              className="bg-slate-800 text-white px-4 py-2 rounded-xl font-medium text-sm cursor-pointer"
              onClick={() => setShowCalendar(false)}
            >
              Appliquer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeInput; 