import { Link, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react';
import './style.css';

import Today from './Today'
import Hourly from './Hourly'
import Daily from './Daily'

function App() {

  const location = 'atlanta,us'
  const api = '205c9a620f7a49aea339807ac28c532c'

  useEffect(() => {
    fetch(`api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api}`)

      .then(res => res.json)
      .then(res => console.log(res))
  }, []);

  return (

    <div className="App">
      <nav>
        <Link to={Today}> Today </Link>
        <Link to={Hourly}> Hourly </Link>
        <Link to={Daily}> Daily </Link>
      </nav>

      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
