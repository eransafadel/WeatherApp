import React from "react";
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  const { city, setCity } = props;
  console.log(city);
  const setCityHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className={classes.buttonIn}>
      <label htmlFor="aaa">{props.label}</label>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          placeholder="Enter city..."
          className={classes.input}
          onChange={setCityHandler}
          value={city}
          {...props.input}
        />
        <button className={classes.button}>Check</button>
      </div>
   
    </div>
  );
};

export default MyInput;
