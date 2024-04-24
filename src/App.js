// App.js
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/Search";
import WeatherCard from "./Components/WeatherCard";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("coimbatore");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      if (query) {
        const apiKey = "598bf0a0109d4d201c0228e96115fd92"; // Use the provided API key here
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("City not found");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Weather Data:", data); // Log the data here
            if (!data.main || !data.weather || data.weather.length === 0) {
              throw new Error("Invalid weather data");
            }
            setWeatherData({
              city: data.name,
              temperature: data.main.temp,
              description: data.weather[0].description,
            });
            setError(null);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
            setError(error.message);
            setWeatherData(null);
          });
      }
    };
  
    fetchWeatherData();
  }, [query]);
  

  const handleSearch = (city) => {
    setQuery(city);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
        <WeatherCard
          city={weatherData.city}
          temperature={Math.round(weatherData.temperature - 273.15)}
          description={weatherData.description}
        />
     
        
      )}
      </div>
    </div>
  );
}
