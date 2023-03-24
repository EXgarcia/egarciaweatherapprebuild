import React from 'react';
import './App.css';
import GetWeather from './components/homepage/GetWeather';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DayWeather from './components/DayWeather';
function App() {
  return (
 <>
 <DayWeather/>
 <GetWeather/>
 </>
  )
}

export default App;
