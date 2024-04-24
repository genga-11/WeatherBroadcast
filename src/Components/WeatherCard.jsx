// WeatherCard.js
import React, { useState } from "react";

export default function WeatherCard  ({ city, temperature, description,country }) {
  const [unit, setUnit] = useState("celsius");

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateWindSpeed = (temperature) => {
    const windSpeedInMps = (temperature / 10) * 1.0; 
    return Math.round(windSpeedInMps * 3.6); 
  };

  const calculateVisibility = (temperature) => {
    const baseVisibility = 10; 
    const visibilityDecreaseRate = 1; 
    const temperatureDifferenceFromBase = temperature - 20; 
    return Math.max(baseVisibility - Math.floor(temperatureDifferenceFromBase / 5) * visibilityDecreaseRate, 0); 
  };
  const calculateHumidity = (temperature) => {
    const baseHumidity = 70; 
    const humidityChangeRate = 2; 
    const temperatureDifferenceFromBase = temperature - 20; 
    return Math.max(baseHumidity - Math.floor(temperatureDifferenceFromBase / 10) * humidityChangeRate, 0); 
  };

  const selectWeatherIcon = (temperature) => {
    return temperature <= 18 ? "/images/cold.png" : temperature > 18 && temperature < 38 ? "/images/cloudy.png" : "/images/sunny.png";
  };

  const weatherIcon = selectWeatherIcon(temperature);
  return (
   

    <div className=" flex items-center justify-center shadow-xl  ">
      <div className="flex flex-col bg-gray-200 rounded p-4  max-w-xs w-full">
        <div className="font-bold  text-gray-900 text-xl mt-2">{city},{country}</div>
        <div className="text-sm text-gray-500 mt-1">{new Date().toDateString()}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
           <img src={weatherIcon} alt="Weather icon" className="w-24 h-24" />
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-5xl mb-4 text-blue-900">{unit === "celsius" ? Math.round(temperature) : Math.round(convertToFahrenheit(temperature))}</div>
          <div className="  font-medium text-5xl text-blue-900 mb-4">{unit === "celsius" ? "°C" : "°F"}</div>
          <div className="flex flex-col items-center ml-8 mb-3 ">
            <div className='text-xl text-orange-500'>{description}</div>
            <div className="flex flex-col items-center justify-center mt-2 font-medium">
              <div className="flex flex-row justify-center mr-3 ">
          <input
            type="radio"
            id="celsius"
            value="celsius"
            checked={unit === "celsius"}
            onChange={handleUnitChange}
            className="mr-2 mt-1"
          />
          <label htmlFor="celsius">Celsius</label></div>
          <div className="flex flex-row justify-center ">
          <input
            type="radio"
            id="fahrenheit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={handleUnitChange}
            className="ml-4 mr-2 mt-1"
          />
          <label htmlFor="fahrenheit">Fahrenheit</label></div>
        </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-bold text-sm text-green-900">Wind</div>
            <div className="text-sm text-gray-900 font-medium mt-1">{calculateWindSpeed(temperature)} km/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-sm text-green-900">Humidity</div>
            <div className="text-sm text-gray-900 font-medium mt-1">{calculateHumidity(temperature)}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-sm text-green-900">Visibility</div>
            <div className="text-sm text-gray-900  font-medium mt-1">{calculateVisibility(temperature)} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};


