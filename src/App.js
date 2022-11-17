import './App.css';
import Weather from "./Weather.js"

export default function App() {
  return (
    <div className="App">
      <div className="container">
<Weather />
<p>
  This project was coded by {" "}<a href="#" target="_blank" > Viktoriia Suvorov </a>{" "} and is {" "} <a href="https://github.com/Viki333221/weather-react" target="_blank">{" "} open-souced on Github </a>
</p>
      </div>
    </div>
  );
}