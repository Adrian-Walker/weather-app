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
        <div>
            <div>Forcast: {dayWeather.Description}</div>
            <div>Temp: {dayWeather.Hi} / {dayWeather.Low}</div>
        </div>
    );
}

export default Days
