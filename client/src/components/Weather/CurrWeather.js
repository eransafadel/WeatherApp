import React from "react";
import classes from "./CurrWeather.module.css";
import Wrapper from "../UI/Wrapper";
const CurrWeather = (props) => {
  const dataLoaction = props.data.location;
  const dataCurrent = props.data.current;

  return (
    <section className={classes.weather}>
     
        <div className={classes.title}>{dataLoaction.name}</div>
          <div> {dataLoaction.country}</div>
          <div>{`${props.currDate} at ${props.currHour}`}</div>
         
  
    
        <div className={classes.titleHuge}>{`${dataCurrent.temp_c}°`}</div>
        <div className={classes.subTitle}> {dataCurrent.condition.text}</div>
    
    </section>
  );
};

export default CurrWeather;
