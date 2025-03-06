"use client";

import React, { useState } from "react";

interface BudgetInputProps {
  label: string;
  defaultValue?: number;
}

const BudgetInput: React.FC<BudgetInputProps> = ({ label, defaultValue }) => {
  const [focused, setFocused] = useState(false);
  const [budget, setBudget] = useState(defaultValue?.toString() || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setBudget(value);
    }
  };

  return (
    <div className="relative w-full font-sans">
      <label className="absolute transition-all duration-200 px-1 z-10 pointer-events-none text-sm -top-2 left-3 bg-white text-gray-500">
        {label}
      </label>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-900 font-bold">€</span>
        </div>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={budget}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full h-12 pl-8 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-bold text-gray-900"
        />
      </div>
    </div>
  );
};

export default BudgetInput;
