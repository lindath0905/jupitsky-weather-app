import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "df3t9495b3b3410e50b1aoab7d1cc149";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="weather-search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="weather-search-input"
                placeholder="Type a city.."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return " loading ..";
  }
}
