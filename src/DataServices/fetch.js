import 'bootstrap/dist/css/bootstrap.min.css';

async function GetDayWeather(){
   
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=8781c497a24ee782b74223e3fde3f557&units=imperial');
    
    const data = await response.json()
    return data
  }

  async function GetFiveDay(){
   
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Stockton&appid=8781c497a24ee782b74223e3fde3f557&units=imperial');
    
    const data = await response.json()
    return data
  }
  
  export {GetDayWeather, GetFiveDay}
  