const express = require("express");
const axios = require("axios").default;

const app = express();

const PORT = 3000;

const API =
  "https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393&extra=false";
const KEY = "8080807e-b853-454f-9ebf-32404a583769";

const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/www"));

app.get("/", (req, res) => {
  res.send("/www/index");
});

app.get("/forecast", async (req, res) => {
  try {
    const apiResponse = await axios.get(API, {
      headers: { "X-Yandex-API-Key": KEY }
    });
    res.send(apiResponse.data);
  } catch (e) {
    res.status(500).send(`${e}`);
  }
});

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`);
});
