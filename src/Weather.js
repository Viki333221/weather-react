import "./Weather.css"
import React from "react";

export default function Weather() {
    return (
    <div className="container">
            <div className="weather-app-wrap">
                <div className="weather-app" id="weatherApp">
                    <div className="row">
                        <div className="col-9">
                            <form id="search-form">
                                <div className="row">
                                    <div className="col-7">
                                        <input type="search" placeholder="Search a city 🔍" className="form-control" id="city-input" autocomplete="off" />
                                    </div>
                                    <div className="col-5">
                                        <input type="submit" value="Search" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li id="date">
                                    <strong> Oct 1 </strong>
                                </li>
                                <li id="day">
                                    Saturday
                                </li>
                                <li id="time">
                                    15:31
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <h1>
                            <strong>MIAMI</strong>
                        </h1>
                        <div className="col-6">
                            <ul>
                                <li id="weatherCondition">
                                    <em>cloudy</em>
                                </li>
                                <li>
                                    <strong id="temperature">81</strong><span id="units"><a href="#" id="fahrenheit" className="active">°F</a>/<a href="#" id="celsius">°C</a></span>
                                </li>
                                <li>
                                    feels like <span id="temperatureFeels">87</span><span id="unitsSmall"><span id="fahreneitFeels">°F</span>/<span id="celsiusFeels">°C</span></span>
                                </li>
                                <li>
                                    <em>min </em><span id="temperatureMin"> 78</span><span id="unitsSmall"><span id="fahreneitMin">°F</span>/<span id="celsiusMin">°C</span></span><em>Max </em><span id="temperatureMax"> 88</span><span id="unitsSmall"><span id="fahreneitMax">°F</span>/<span id="celsiusMax">°C</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="icon"> <img src="src/cloudy.jpg" width="100" id="icon" /></div>
                            <ul>
                                <li>
                                    Humidity: <span id="humidity">78</span>%
                                </li>
                                <li>
                                    Wind: <span id="wind">7</span>mph
                                </li>
                            </ul>
                            </div>
                        </div>
                    <div className="forecast" id="forecast">
                    </div>
                </div>
            </div>
    </div>);
}