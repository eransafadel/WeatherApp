const PORT = 8000;

const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const axios = require("axios");
app.use(cors());

console.log(process.env);

app.get("/api", async (req, res) => {
  console.log("heyyy!");
  const apiKey = process.env.API_KEY;
  const city = req.query.value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
  console.log(city);
  try {
    const { data: response } = await axios.get(url);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("Server running on PORT" + PORT));
