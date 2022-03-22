import React, { useState, useEffect } from "react";
import Form from "./components/MyForm/Form";
import Item from "./components/Weather/Item";
import classes from "./App.module.css";
import WeatherSummery from "./components/WeatherSummery";
import MoreInfo from "./components/MoreInfo";
import Wrapper from "./components/UI/Wrapper";
import CustomPopup from "./components/UI/CustomPopup";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [cityNameValid, setCityNameValid] = useState(false);
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  const getWeather = async () => {
    try {
      if (city.length === 0) return;
      const res = await axios.get("http://localhost:8000/api", {
        params: { value: city },
      });
      if (res.status === 400) {
        console.log("Something get wrong!");
      }
      const resData = await res.data;
      setWeatherData(resData);

      setCityNameValid(false);
    } catch {
      console.error("Error fetching!");
      setModalState(true);
    }
  };

  useEffect(getWeather, []);

  const validData =
    !cityNameValid && typeof weatherData.location !== "undefined";

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.details}>
          <br />
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
        {isModalOpen && (
          <CustomPopup
            title={"Please enter valid city!"}
            show={isModalOpen}
            onClose={toggleModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
