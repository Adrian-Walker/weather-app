import React, { useContext } from "react";

import { WeatherContext } from './context';

function Days({ index }) {
    // getting weather data
    const { weatherData } = useContext(WeatherContext);

    console.log('days', {
        weatherData,
        index
    });

    // individual day weather data
    const dayWeather = weatherData[index];

    // render weather information
    return (
        <div className="dayWeather">
            <img>{dayWeather.pic}</img>
            <div>Forecast: {dayWeather.Description} </div>
            <br></br>
            <div> Temp: {dayWeather.High} / {dayWeather.Low} </div>
            <br></br>
        </div>
    );
}

export default Days
