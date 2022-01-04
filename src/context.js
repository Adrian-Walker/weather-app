import { createContext, useState } from "react";

// creates the context that will have the data to be shared across the components
const WeatherContext = createContext({
    weatherData: [],
    setWeatherData: () => { },
});
// component is used to provide it's data to its children using context
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
