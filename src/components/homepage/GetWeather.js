import { GetDayWeather, GetFiveDay } from "../../DataServices/fetch";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Cloudy from '../../assets/cloudy.png';
export default function GetWeather() {
  const [weather, setWeather] = useState([]);
  const [name, setName] = useState([]);
  const [low, setLow] = useState([]);
  const [high, setHigh] = useState([]);
  const [weatherOne, setWeatherOne] = useState([]);
  const [weatherTwo, setWeatherTwo] = useState([]);
  const [weatherThree, setWeatherThree] = useState([]);
  const [weatherFour, setWeatherFour] = useState([]);
  const [weatherFive, setWeatherFive] = useState([]);
  const [weatherOneMin, setWeatherOneMin] = useState([]);
  const [weatherTwoMin, setWeatherTwoMin] = useState([]);
  const [weatherThreeMin, setWeatherThreeMin] = useState([]);
  const [weatherFourMin, setWeatherFourMin] = useState([]);
  const [weatherFiveMin, setWeatherFiveMin] = useState([]);
  const [weatherOneMax, setWeatherOneMax] = useState([]);
  const [weatherTwoMax, setWeatherTwoMax] = useState([]);
  const [weatherThreeMax, setWeatherThreeMax] = useState([]);
  const [weatherFourMax, setWeatherFourMax] = useState([]);
  const [weatherFiveMax, setWeatherFiveMax] = useState([]);
  const [dayOne, setDayOne] = useState([]);




  //whatever is in the usestae will be the initial state of weather
  async function WData() {
    const any = await GetDayWeather();

    console.log(any);
    setWeather(Math.round(any.main.temp) + '°');
    setName(any.name);
    setLow(Math.round((any.main.temp_min)) + '°');
    setHigh(Math.round((any.main.temp_max)) + '°');

  }

  async function WDataTwo() {
    const any = await GetFiveDay();
    console.log(any);
    setWeatherOne(Math.round(any.list[4].main.temp) + '°');
    setWeatherThree(Math.round(any.list[20].main.temp) + '°');
    setWeatherTwo(Math.round(any.list[12].main.temp) + '°');
    setWeatherFour(Math.round(any.list[28].main.temp) + '°');
    setWeatherFive(Math.round(any.list[36].main.temp) + '°');

    setWeatherOneMin(Math.round(any.list[4].main.temp_min) + '°');
    setWeatherThreeMin(Math.round(any.list[20].main.temp_min) + '°');
    setWeatherTwoMin(Math.round(any.list[12].main.temp_min) + '°');
    setWeatherFourMin(Math.round(any.list[28].main.temp_min) + '°');
    setWeatherFiveMin(Math.round(any.list[36].main.temp_min) + '°');

    setWeatherOneMax(Math.round(any.list[4].main.temp_max) + '°');
    setWeatherThreeMax(Math.round(any.list[20].main.temp_max) + '°');
    setWeatherTwoMax(Math.round(any.list[12].main.temp_max) + '°');
    setWeatherFourMax(Math.round(any.list[28].main.temp_max) + '°');
    setWeatherFiveMax(Math.round(any.list[36].main.temp_max) + '°');
    setDayOne(any.list[4].dt * 1000);
  }





  // const [cold]

  return (
    <div className="bgImage">
      <main >
        <Container className="d-flex justify-content-center">
          <h1 className="weatherTitle"> Weather App Rebuild</h1>

        </Container>

        <Container className="d-flex justify-content-center firstCard">
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Body classname='body'>
                <Card.Subtitle className="d-flex justify-content-left underline"><h2 className="lName">{name}</h2></Card.Subtitle>
                <Card.Title className="d-flex justify-content-center"><h1>{weather}</h1></Card.Title>
                <h4 className="d-flex justify-content-center lName" >Today</h4>
                <br></br>
                <Card.Text className="d-flex justify-content-center tName">
                  <h3> High  {high}</h3>
                </Card.Text>
                <Card.Text className="d-flex justify-content-center tName">
                  <h3>Low  {low}</h3>
                </Card.Text>

              </Card.Body>
            </Card>
          </Row>
         

       
          <Container>
          <Row className="d-flex justify-content-center fiveCards">
           
              <Card style={{ width: '14rem' }}>
                <Card.Body  >
                  <h2 className="d-flex justify-content-center lName">Monday</h2>
                  <Card.Title><h1 className="TName d-flex justify-content-center">{weatherOne}</h1></Card.Title>
                  <br></br>
                  <Card.Text>
                    <h3 className="tName">High {weatherOneMax}</h3>
                  </Card.Text>
                  <Card.Text>
                    <h3 className="tName">Low {weatherOneMin}</h3>
                  </Card.Text>
                </Card.Body>
              </Card>

           
    
           
              <Card style={{ width: '14rem' }}>
                <Card.Body  >
                  <h2 className="d-flex justify-content-center lName">Tuesday</h2>
                  <Card.Title><h1 className="TName d-flex justify-content-center">{weatherTwo}</h1></Card.Title>
                  <br></br>
                  <Card.Text>
                    <h3 className="tName">High {weatherTwoMax}</h3>
                  </Card.Text>
                  <Card.Text>
                    <h3 className="tName">Low {weatherTwoMin}</h3>
                  </Card.Text>
                </Card.Body>
              </Card>
           
             
           

        
        
          <Card style={{ width: '14rem' }}>
            <Card.Body  >
              <h2 className="d-flex justify-content-center lName">Wednesday</h2>
              <Card.Title><h1 className="TName d-flex justify-content-center">{weatherThree}</h1></Card.Title>
              <br></br>
              <Card.Text>
                <h3 className="tName">High {weatherThreeMax}</h3>
              </Card.Text>
              <Card.Text>
                <h3 className="tName">Low {weatherThreeMin}</h3>
              </Card.Text>
            </Card.Body>
          </Card>



          <Card style={{ width: '14rem' }}>
            <Card.Body  >
              <h2 className="d-flex justify-content-center lName">Thursday</h2>
              <Card.Title><h1 className="TName d-flex justify-content-center">{weatherFour}</h1></Card.Title>
              <br></br>
              <Card.Text>
                <h3 className="tName">High {weatherFourMax}</h3>
              </Card.Text>
              <Card.Text>
                <h3 className="tName">Low {weatherFourMin}</h3>
              </Card.Text>
            </Card.Body>
          </Card>


      
          <Card style={{ width: '14rem' }}>
            <Card.Body  >
              <h2 className="d-flex justify-content-center lName">Friday</h2>
              <Card.Title><h1 className="TName d-flex justify-content-center">{weatherFive}</h1></Card.Title>
              <br></br>
              <Card.Text>
                <h3 className="tName">High {weatherFiveMax}</h3>
              </Card.Text>
              <Card.Text>
                <h3 className="tName">Low {weatherFiveMin}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        </Container>
      </Container>

      <Container className="d-flex justify-content-center">
      <button onClick={WData} className="lName">Todays Weather </button>
      <button onClick={WDataTwo} className="lName">Five Day Weather</button>
      </Container>
    </main>
    </div >
    )
  } 