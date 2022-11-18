import React from "react";

export default function Forecast(){
    return(
        <div className="container">
            <div className="forecast">
                <div className="row">
                    <div className="col-2">                        
                        <div className="day">
                            Monday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    <div className="col-2">                        
                        <div className="day">
                            Tuesday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    <div className="col-2">                        
                        <div className="day">
                            Wednesday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    <div className="col-2">                        
                        <div className="day">
                            Thursday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    <div className="col-2">                        
                        <div className="day">
                            Friday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    <div className="col-2">                        
                        <div className="day">
                            Saturday
                        </div>    
                            <div className="icon">
                                  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" />
                            </div>
                            <div className="forecast-temperature">
                                10 °C/°F
                            </div>                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}