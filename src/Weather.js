import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="weather-search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="weather-search-input"
              placeholder="Type a city.."
              autoFocus="on"
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
      <h2>Vienna</h2>
      <ul>
        <li>Wednesday 07:00</li>
        <li>mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex align-items-center gap-1">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
            alt="sun-logo"
          ></img>{" "}
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 36%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
      Hello from weather
    </div>
  );
}
