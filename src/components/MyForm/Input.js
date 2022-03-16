import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { city, setCity } = props;
  const setCityHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <label htmlFor="aaa">{props.label}</label>
      <div className={classes.divInput}>
        <input
          className={classes.input}
          placeholder="Enter city..."
          onChange={setCityHandler}
          value={city}
          {...props.input}
        />
        <button>Check</button>
      </div>
    </div>
  );
};

export default Input;
