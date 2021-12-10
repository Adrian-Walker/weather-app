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
          Description: forecast.Day.IconPhrase
        })
        ));
      });

  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/"> 7 Day </Link>
        <Link to="/three-day"> 3 Day </Link>
        <Link to="/Daily"> Daily </Link>
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

const DaySelector = ({ weather = [] }) => {

  return (
    <div className="day-list">
      {!!weather && weather.map((d, index) => (
        <div key={index}>
          <Days index={index} />
        </div>
      ))}
    </div>
  )
}

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
