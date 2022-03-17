import React, {  useState } from "react";
import Form from "./components/MyForm/Form";
import Item from "./components/Weather/Item";
import classes from "./App.module.css";
import WeatherSummery from "./components/WeatherSummery";
import MoreInfo from "./components/MoreInfo";
import Wrapper from "./components/UI/Wrapper";

import axios from "axios";

function App() {
  
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [cityNameValid, setCityNameValid] = useState(false);

  

  const getWeather = async () => {
  
    try {
  
      const res = await axios.get("http://localhost:8000/api", {
        params: { value: city },
      }).catch(err => {
        console.log("Error!");
      });
     
      setWeatherData(res.data);
      setCityNameValid(false);
    } catch {

      console.log("Error!");
    }
  };

  const validData =
    !cityNameValid && typeof weatherData.location !== "undefined";
  
 
  return (
    <div>
      
      <div className={classes.container}>
        <div className={classes.details}>
          <br/>
          <Wrapper title="header">
            <WeatherSummery />
          </Wrapper>
          
          <Wrapper title="inputBody">
            <Form city={city} setCity={setCity} getWeather={getWeather} />
          </Wrapper>
          
          <Wrapper title="myFooter">
            {validData && <MoreInfo weatherData={weatherData} />}
          </Wrapper>
        </div>
       
        {validData && <Item weatherData={weatherData} />}
       
      </div>
    </div>
  );
}

export default App;
