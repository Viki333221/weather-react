import React from "react";
import "./Weather.css"

export default function Weather() {
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
                            <strong>MIAMI</strong>
                        </h1>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <em><span className="condition">cloudy</span></em>
                                </li>
                                <li>
                                    <span className="nowTemperature"><strong>81</strong><span className="units">°F/°C</span></span>
                                </li>
                                <li>
                                    <span className="feelsTemperature">feels like: 87<span className="unitsSmall">°F/°C</span></span>
                                </li>
                                <li>
                                    <span className="temperatureMinMax">min: 78<span className="unitsSmall">°F/°C</span>, max: 88 <span className="unitsSmall">°F/°C</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="icon"> <img src="https://media.istockphoto.com/vectors/funny-eyed-sun-sunshine-cute-summer-logo-spring-light-emotion-doodle-vector-id1359218243?b=1&k=20&m=1359218243&s=170667a&w=0&h=kh-tOUEgN6MItdSiNxn2RB2J8v-zdM8M7Vs-vINATRw=" width="100" alt="sunny" /></div>
                            <ul>
                                <li>
                                    Humidity: 78%
                                </li>
                                <li>
                                    Wind: 7mph
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>);
}