import React, { Fragment, useState } from "react";
import Form from "./components/MyForm/Form";
import Item from "./components/Weather/Item";
import classes from "./App.module.css";
import WeatherSummery from "./components/WeatherSummery";
import MoreInfo from "./components/MoreInfo";
import Wrapper from "./components/UI/Wrapper";

function App() {
  const apiKey = "dd708b0f3c764d5298893524221403";
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [cityNameValid, setCityNameValid] = useState(false);
  const getWeather = async () => {
    // https://localhost:8080/api/getWeather
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`
      );
      if (!response.ok) {
        setCityNameValid(true);
        console.log("Error");
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      // console.log(data);
      setWeatherData(data);
      console.log(weatherData);
      setCityNameValid(false);
    } catch {}
  };

  const validData =
    !cityNameValid && typeof weatherData.location !== "undefined";

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.details}>
        <Wrapper title="start"/>
          <Wrapper title="header">
            <WeatherSummery />
          </Wrapper>
          <br/>
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
