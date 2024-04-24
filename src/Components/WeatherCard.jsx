// WeatherCard.js
import React, { useState } from "react";

export default function WeatherCard  ({ city, temperature, description }) {
  const [unit, setUnit] = useState("celsius");

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateWindSpeed = (temperature) => {
<<<<<<< HEAD
    // Adjust wind speed based on temperature
    // Example formula: wind speed increases by 1 m/s for every 10°C increase in temperature
    const windSpeedInMps = (temperature / 10) * 1.0; // Calculate wind speed in m/s
    return Math.round(windSpeedInMps * 3.6); // Convert wind speed to km/h
  };

=======
    return Math.round((temperature / 10) * 1.0);
  };
>>>>>>> weatherCard
  const calculateVisibility = (temperature) => {
    // Example formula: visibility decreases by 1 km for every 5°C increase in temperature
    const baseVisibility = 10; // Initial visibility value in km
    const visibilityDecreaseRate = 1; // Visibility decrease rate per 5°C increase in temperature
    const temperatureDifferenceFromBase = temperature - 20; // Calculate difference from base temperature
    return Math.max(baseVisibility - Math.floor(temperatureDifferenceFromBase / 5) * visibilityDecreaseRate, 0); // Ensure visibility is non-negative
  };
<<<<<<< HEAD
=======

>>>>>>> weatherCard
  const calculateHumidity = (temperature) => {
    // Example formula: humidity decreases by 2% for every 10°C increase in temperature
    const baseHumidity = 70; // Initial humidity value
    const humidityChangeRate = 2; // Humidity decrease rate per 10°C increase in temperature
    const temperatureDifferenceFromBase = temperature - 20; // Calculate difference from base temperature
    return Math.max(baseHumidity - Math.floor(temperatureDifferenceFromBase / 10) * humidityChangeRate, 0); // Ensure humidity is non-negative
  };
<<<<<<< HEAD

=======
>>>>>>> weatherCard
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
      <div className="flex flex-col bg-white rounded p-4  max-w-xs">
        <div className="font-bold text-xl">{city}</div>
        <div className="text-sm text-gray-500">{new Date().toDateString()}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
<<<<<<< HEAD
        <div className="font-medium text-4xl mb-2">{unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}</div>
          <div className="  font-medium text-4xl mb-3">{unit === "celsius" ? "°C" : "°F"}</div>
          <div className="flex flex-col items-center ml-6 mb-2">
            <div>{description}</div>
            <div className="flex flex-row items-center justify-center mt-2">
          {/* Option to change temperature unit */}
          <input
            type="radio"
            id="celsius"
            value="celsius"
            checked={unit === "celsius"}
            onChange={handleUnitChange}
            className="mr-1 mt-1"
          />
          <label htmlFor="celsius">Celsius</label>
          <input
            type="radio"
            id="fahrenheit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={handleUnitChange}
            className="ml-3 mr-1 mt-1"
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>
        </div>
=======
        <div className="font-medium text-4xl mb-1">{unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}</div>
          <div className=" font-medium text-4xl mb-1">{unit === "celsius" ? "°C" : "°F"}</div>
          <div className="flex flex-col items-center ml-6">
            <div className="mb-3">{description}</div>
            <div className="flex items-center ">
         <input
          type="radio"
           id="celsius"
          value="celsius"
          checked={unit === "celsius"}
          onChange={handleUnitChange}
           className="mr-1 mt-1"
         />
         <label htmlFor="celsius">Celsius</label>
         <input
           type="radio"
           id="fahrenheit"
           value="fahrenheit"
           checked={unit === "fahrenheit"}
           onChange={handleUnitChange}
           className="ml-3 mr-1 mt-1"
         />
         <label htmlFor="fahrenheit">Fahrenheit</label>
       </div>
       {/* <p className="text-3xl font-bold mt-4">
         {unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}° {unit === "celsius" ? "C" : "F"}
       </p> */}
>>>>>>> weatherCard
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{calculateWindSpeed(temperature)} km/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{calculateHumidity(temperature)}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{calculateVisibility(temperature)} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};


