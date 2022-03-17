const PORT = 8000;

const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const axios = require("axios");
app.use(cors());

console.log(process.env);

app.get("/api", async (req, res) => {

  const apiKey = process.env.API_KEY;
  const city = req.query.value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
 
  try {
    const { data: response } = await axios.get(url);
    res.send(response);
  } catch (error) {
    console.log("Error!")
    res.status(404).json('404 - no user exists in db to update');
  }
});

app.listen(PORT, () => console.log("Server running on PORT" + PORT));
