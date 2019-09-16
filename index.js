const express = require("express");
const axios = require("axios").default;

const config = require("./config");

const app = express();

const PORT = 3000;

const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/www"));

app.get("/", (req, res) => {
  res.send("/www/index");
});

app.get("/forecast", async (req, res) => {
  try {
    const apiResponse = await axios.get(config.weatherApi, {
      headers: { "X-Yandex-API-Key": config.weatherApiKey }
    });
    res.send(apiResponse.data);
  } catch (e) {
    res.status(500).send(`${e}`);
  }
});

app.listen(config.port, () => {
  console.log(`server starting on port ${config.port}`);
});
