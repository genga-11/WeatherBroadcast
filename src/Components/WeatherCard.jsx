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
    // <div className="bg-white p-4 rounded-lg shadow-md mt-4">
    //   <h2 className="text-xl font-semibold">{city}</h2>
    //   <p className="text-gray-600">{description}</p>
    //   <div className="flex items-center mt-4">
    //     <input
    //       type="radio"
    //       id="celsius"
    //       value="celsius"
    //       checked={unit === "celsius"}
    //       onChange={handleUnitChange}
    //       className="mr-2"
    //     />
    //     <label htmlFor="celsius">Celsius</label>
    //     <input
    //       type="radio"
    //       id="fahrenheit"
    //       value="fahrenheit"
    //       checked={unit === "fahrenheit"}
    //       onChange={handleUnitChange}
    //       className="ml-4 mr-2"
    //     />
    //     <label htmlFor="fahrenheit">Fahrenheit</label>
    //   </div>
    //   <p className="text-3xl font-bold mt-4">
    //     {unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}° {unit === "celsius" ? "C" : "F"}
    //   </p>
    // </div>

    <div className=" flex items-center justify-center shadow-xl">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl">{city}</div>
        <div className="text-sm text-gray-500">{new Date().toDateString()}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{temperature}°</div>
          <div className="flex flex-col items-center ml-6">
            <div>{description}</div>
            <div className="mt-1">
              <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
              <span className="text-sm font-light text-gray-500">28°C</span>
            </div>
            <div>
              <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
              <span className="text-sm font-light text-gray-500">20°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">68%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">10km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
