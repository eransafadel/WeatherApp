import React from 'react';
import classes from "./MoreInfo.module.css"

const MoreInfo = (props) => {

    const data = props.weatherData;
    console.log(data);
    const utcSeconds = data.location.localtime_epoch;
    const d = new Date(utcSeconds * 1000); 
    const currHour = d.toLocaleTimeString([], { timeStyle: "short" });
    const currDate = d.toLocaleDateString(utcSeconds).replaceAll(".", "/");
    return (
      <section className={classes.myInfo}>
          <p>{`latitude ${data.location.lat}\t longtitude ${data.location.lon}`}</p>
          <p>{`accurate to ${currDate} at  ${currHour}`}</p>
      </section>
    );
  };
  
  export default MoreInfo;