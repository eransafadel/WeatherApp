import React from "react";
import classes from "./Item.module.css";
import CurrWeather from "./CurrWeather";
import InfoWeather from "./InfoWeather";
const Item = (props) => {
  const data = props.weatherData;
 
  const utcSeconds = data.current.last_updated_epoch;
  const d = new Date(utcSeconds * 1000); 
  // const currHour = d.toLocaleTimeString([], { timeStyle: "short" });
  const currHour= Number(d.toLocaleTimeString().slice(0,2));
  const currDate = d.toLocaleDateString(utcSeconds).replaceAll(".", "/");



  return (
    <div className={classes.outerContainer}>
    <div className={classes.container}>
      <CurrWeather data={data} currDate={currDate} currHour={String(currHour).concat(":00")} />
      <InfoWeather data={data} currHour={currHour}/>

      </div>
    </div>
  );
};

export default Item;
