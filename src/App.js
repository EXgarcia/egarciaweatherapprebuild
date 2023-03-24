//Fernando Aguilar: upon button click the cards the weather for the day and the five day weathercast. i can see that css and styling was under development, so good job on getting started on that. Would have like to see a search bar so i could look up diffetent cities. overall good attemp on the weather app. i cant tell you learned more from the last time.


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
