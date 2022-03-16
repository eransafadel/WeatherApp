import React from "react";
import classes from "./CurrWeather.module.css";
import Wrapper from "../UI/Wrapper";
const CurrWeather = (props) => {
  const dataLoaction = props.data.location;
  const dataCurrent = props.data.current;

  return (
    <section className={classes.weather}>
      <br/><br/>
      <div className={classes.title}>{dataLoaction.name}</div>
      <div className={classes.subTitle}>
      <div> {dataLoaction.country}</div>
      <div>{`${props.currDate} at ${props.currHour}`}</div>
      </div>
      <br/>
      <div className={classes.titleHuge}>{`${dataCurrent.temp_c}°`}</div>
     <div> {dataCurrent.condition.text}</div>
     <br/> <br/>
    
    </section>
  );
};

export default CurrWeather;
