import React from "react";
import classes from "./InfoWeather.module.css";
import TableWeather from "./TableWeather";

const InfoWeather = (props) => {
  const currHour = props.currHour;
  const dataCurrent = props.data.current;
  const dataForecast = props.data.forecast.forecastday[0].hour;

  const hoursTemperatureArr = Array.from({ length: 5 }, (_, index) => {
    const hour = currHour - (3 - index);
    return {
      title: String(hour).concat(":00"),
      content: String(Math.round(Number(dataForecast[hour].temp_c))).concat(
        "°"
      ),
    };
  });

  const arr = [
    {
      title: "precipitation",
      content: `${dataCurrent.precip_mm} mm`,
    },
    {
      title: "humidity",
      content: `${dataCurrent.humidity}%`,
    },
    {
      title: "wind",
      content: `${dataCurrent.wind_kph} km/h`,
    },
  ];

  return (
    <div className={classes.infoWeather}>
      <TableWeather data={arr} />
      <TableWeather data={hoursTemperatureArr} />
    </div>
  );
};

export default InfoWeather;
