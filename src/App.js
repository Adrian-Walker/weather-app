import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './style.css';

import Today from './Today'
import Hourly from './Hourly'
import Daily from './Daily'
import Days from './Days';

function App() {

  const location = '13003_PC?';
  const apikey = 'qUxfCn6X6leA0rZvXTaDHIXSmNkX1l78';

  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}apikey=${apikey}`
    )
      .then(res => res.json())
      .then(res => setWeather(res.DailyForecasts.map(forecast => {
        return {
          Low: forecast.Temperature.Minimum.Value,
          High: forecast.Temperature.Maximum.Value,
          Description: forecast.Day.IconPhrase,
          Pic: forecast.Day.Icon
        }
      })));

  }, []);

  useEffect(() => {
    console.log(weather)
  }, [weather]);


  return (
    <div className="App">
      <nav>
        <Link to="/Today"> Today </Link>
        <Link to="/Hourly"> Hourly </Link>
        <Link to="/Daily"> Daily </Link>
      </nav>

      <div>
        {weather.map((d, index) => <div key={index}> </div>)}
      </div>

      <Routes>
        <Route exact path="./Today" element={<Today />} />
        <Route exact path="./Hourly" element={<Hourly />} />
        <Route exact path="./Daily" element={<Daily />} />
      </Routes>
    </div>
  );
}

export default App
