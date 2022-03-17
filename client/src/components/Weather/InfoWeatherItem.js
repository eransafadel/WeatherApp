import React from 'react';
import classes from "./InfoWeatherItem.module.css";


const InfoWeatherItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.subTitle}>{props.content}</div>
    </div>
  );
};

export default InfoWeatherItem;
