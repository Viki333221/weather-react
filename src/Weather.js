import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
    const[weather, setWeather] = useState({ready: false})
    function handleResponse(response){
        setWeather({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temperature,
            description: response.data.weather[0].description,
            temperatureFeels: response.data.main.feels_like,
            temperatureMin: response.data.main.temp_min,
            temperatureMax: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,

        });
    }
    if (weather.ready){
    return (
    <div className="Weather">
    <div className="row">
                        <div className="col-9">
                            <form>
                                <div className="row">
                                    <div className="col-9">
                                        <input type="search" placeholder="Search a city..." autoFocus="on" class="form-control" />
                                    </div>  
                                    <div className="col-3">  
                                        <input type="submit" value="Search" className="btn btn-primary" w-100 />
                                    </div>    
                                </div>        
                            </form>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li>
                                    <strong><span className="date"> Oct 1 </span></strong>
                                </li>
                                <li>
                                    <span className="day">Saturday</span>
                                </li>
                                <li>
                                    <span className="time">15:31</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <h1>
                            <strong>{weather.city}</strong>
                        </h1>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <em><span className="condition">{weather.description}</span></em>
                                </li>
                                <li>
                                    <span className="nowTemperature"><strong>{weather.temperature}</strong><span className="units">°F/°C</span></span>
                                </li>
                                <li>
                                    <span className="feelsTemperature">feels like: {weather.temperatureFeels}<span className="unitsSmall">°F/°C</span></span>
                                </li>
                                <li>
                                    <span className="temperatureMinMax">min: {weather.temperatureMin}<span className="unitsSmall">°F/°C</span>, max: {weather.temperatureMax} <span className="unitsSmall">°F/°C</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="icon"> <img src="https://media.istockphoto.com/vectors/funny-eyed-sun-sunshine-cute-summer-logo-spring-light-emotion-doodle-vector-id1359218243?b=1&k=20&m=1359218243&s=170667a&w=0&h=kh-tOUEgN6MItdSiNxn2RB2J8v-zdM8M7Vs-vINATRw=" width="100" alt="sunny" /></div>
                            <ul>
                                <li>
                                    Humidity: {weather.humidity}%
                                </li>
                                <li>
                                    Wind: {weather.wind}mph
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>);
} else {
    const apiKey="930a3a9d32117e6afd045c48755b3db9";
let city="Miami"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
axios.get(apiUrl).then(handleResponse)

return"Loading..."
}}