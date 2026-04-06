import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "clear-day",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "overcast-day",
    "few-clouds-night": "overcast-night",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "overcast",
    "broken-clouds-night": "overcast",
    "shower-rain-day": "rain",
    "shower-rain-night": "rain",
    "rain-day": "drizzle",
    "rain-night": "drizzle",
    "thunderstorm-day": "thunderstorms",
    "thunderstorm-night": "thunderstorms",
    "snow-day": "snow",
    "snow-night": "snow",
    "mist-day": "fog",
    "mist-night": "fog",
  };

  const iconName = codeMapping[props.code];
  if (!iconName) return null;

  return (
    <img
      src={`/icons/${iconName}.svg`}
      alt={props.code}
      width="80"
      height="80"
    />
  );
}
