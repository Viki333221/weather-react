import React from "react";

export default function Weather() {
    return (
    <div className="Weather">
    <div className="row">
                        <div className="col-9">
                            <form>
                                        <input type="search" placeholder="Search a city 🔍"  />
                                        <input type="submit" value="Search" className="btn btn-primary" />
                            </form>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li>
                                    <strong> Oct 1 </strong>
                                </li>
                                <li>
                                    Saturday
                                </li>
                                <li>
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
                                <li>
                                    <em>cloudy</em>
                                </li>
                                <li>
                                    <strong>81</strong>°F/°C
                                </li>
                                <li>
                                    feels like: 87°F/°C
                                </li>
                                <li>
                                    min: 78°F/°C, max: 88°F/°C
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