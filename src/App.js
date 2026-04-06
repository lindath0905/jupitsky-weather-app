import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      JupitSky - Weather App
      <Weather defaultCity="Vienna"/></div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/lindath0905" target="_blank">
          Linda Thurner
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/lindath0905/jupitsky-weather-app"
          target="_blank"
        >
          open-sourced on Github
        </a>
        .
      </footer>
    </div>
  );
}
