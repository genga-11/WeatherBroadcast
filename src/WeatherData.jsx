
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/Search";
import WeatherCard from "./Components/WeatherCard";
import Navbar from "./Components/Navbar";

export default function WeatherData() {

  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Coimbatore");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      if (location) {
        const apiKey = "598bf0a0109d4d201c0228e96115fd92"; 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("City not found");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Weather Data:", data);
            if (!data.main || !data.weather || data.weather.length === 0) {
              throw new Error("Invalid weather data");
            }
            setWeatherData({
              city: data.name,
              country: data.sys.country,
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
  }, [location]);
  

  const handleSearch = (city) => {
    setLocation(city);
  };

  

  return (
    <>
     <Navbar/>
    
    <div className="flex justify-center items-center h-screen " style={{ backgroundImage: `url(/images/cloud1.jpg)` }}>
     
      <div className="text-center">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 text-center text-xl font-medium mt-4">{error}</p>}
        {weatherData && (
        <WeatherCard
          city={weatherData.city}
          country={weatherData.country}
          temperature={Math.round(weatherData.temperature - 273.15)}
          description={weatherData.description}
        />
      )}
      </div>
    </div>
    </>
  );
}
