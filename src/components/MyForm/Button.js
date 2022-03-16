import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.center}>
      <button className={classes.button}>{props.text}</button>
    </div>
  );
};

export default Button;
