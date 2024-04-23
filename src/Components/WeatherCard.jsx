// WeatherCard.js
import React, { useState } from "react";

const WeatherCard = ({ city, temperature, description }) => {
  const [unit, setUnit] = useState("celsius");

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold">{city}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="celsius"
          value="celsius"
          checked={unit === "celsius"}
          onChange={handleUnitChange}
          className="mr-2"
        />
        <label htmlFor="celsius">Celsius</label>
        <input
          type="radio"
          id="fahrenheit"
          value="fahrenheit"
          checked={unit === "fahrenheit"}
          onChange={handleUnitChange}
          className="ml-4 mr-2"
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
      <p className="text-3xl font-bold mt-4">
        {unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}° {unit === "celsius" ? "C" : "F"}
      </p>
    </div>
  );
};

export default WeatherCard;
