import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { WeatherContext, WeatherContextProvider } from './context';

import './style.css';

import Today from './Today'
import Hourly from './Hourly'
import Daily from './Daily'
import Days from './Days';

function App() {

  const location = '13003_PC?';
  const apikey = 'qUxfCn6X6leA0rZvXTaDHIXSmNkX1l78';

  // use hook into context to give access to the context
  const {
    weatherData,
    setWeatherData
  } = useContext(WeatherContext);


  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}apikey=${apikey}`
    )
      .then(res => res.json())
      .then(res => {
        setWeatherData(res.DailyForecasts.map(forecast => ({
          Low: forecast.Temperature.Minimum.Value,
          High: forecast.Temperature.Maximum.Value,
          Description: forecast.Day.IconPhrase,
          Pic: forecast.Day.Icon
        })
        ));
      });

  }, []);

  return (
    <div className="App">
      <nav className="navigation">
        <ul>
          <li> <Link to="/"> 7 Day </Link></li>
          <li> <Link to="/three-day"> 3 Day </Link></li>
          <li> <Link to="/Daily"> Daily </Link></li>
        </ul>

      </nav>



      <Routes>
        <Route path="/" element={<DaySelector weather={weatherData} />} />
        <Route path="/three-day" element={<DaySelector weather={weatherData.slice(0, 3)} />} />
        <Route path="/Daily" element={<DaySelector weather={weatherData.slice(0, 1)} />} />
      </Routes>

      {/* <Routes>
        {/* <Route exact path="./Today" element={<Today />} />
        <Route exact path="./Hourly" element={<Hourly />} />
        <Route exact path="./Daily" element={<Daily />} />
        </Routes>
        */}


    </div >
  );
}


// render weather day component: 1 day | 3 day | 7 day
const DaySelector = ({ weather = [] }) => {

  return (
    <div className="day-list">
      {!!weather && weather.map((d, index) => (
        // if weather data is not null, then render Days component
        <div key={index}>
          <Days index={index} />
        </div>
      ))}
    </div>
  )
}

// wrapping component with context provider, allowing nested components under the App to have access to weather data
const withWeatherState = (Component) => {
  return (props) => {
    return (
      < WeatherContextProvider >
        <Component {...props} />
      </WeatherContextProvider >
    )
  }
}

export default withWeatherState(App);
