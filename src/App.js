import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherData from "./WeatherData";
import LoginPage from "./Components/LoginPage";

export default function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/weather" element={<WeatherData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}