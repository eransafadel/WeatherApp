import React from "react";
import Input from "./Input";
import classes from "./Form.module.css";
import MyInput from "./MyInput";
const Form = (props) => {
  const { city, setCity, getWeather } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputInvalid()) {
      clearInput();
      return;
    }
    getWeather();
  };

  const inputInvalid = () => {
    return city.trim() === "" || city.match(/^[0-9]+$/) !== null;
  };

  const clearInput = () => {
    setCity("");
  };

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit}>
          <MyInput
            label="City name"
            input={{
              type: "text",
            }}
            city={city}
            setCity={setCity}
          />
      </form>
    </>
  );
};

export default Form;
