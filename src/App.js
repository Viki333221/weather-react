import React from "react"
import './App.css';
import Weather from "./Weather.js"
import Forecast from "./Forecast.js"
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
<Weather />
<Forecast />
<p>
This project was coded by {" "}<a href="foo" target="_blank" rel="noopener noreferrer" > Viktoriia Suvorov </a>{" "} and is {" "} <a href="https://github.com/Viki333221/weather-react" target="_blank" rel="noopener noreferrer" >{" "} open-souced on Github </a></p>
      </div>
    </div>
  );
}