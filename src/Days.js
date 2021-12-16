import React, { useContext } from "react";

import { WeatherContext } from './context';

function Days({ index }) {
    const { weatherData } = useContext(WeatherContext);

    console.log('days', {
        weatherData,
        index
    })

    const dayWeather = weatherData[index];

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
