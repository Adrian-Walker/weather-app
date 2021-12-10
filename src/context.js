import { createContext, useState } from "react";

const WeatherContext = createContext({
    weatherData: [],
    setWeatherData: () => { },
});

const WeatherContextProvider = ({ children }) => {
    const [contextWeatherData, setContextWeatherData] = useState([]);

    return (
        <WeatherContext.Provider value={{
            weatherData: contextWeatherData,
            setWeatherData: setContextWeatherData
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherContext,
    WeatherContextProvider
}
