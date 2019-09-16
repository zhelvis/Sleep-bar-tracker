const express = require("express");
const app = express();

const PORT = 3000;

const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/www"));

app.get("/", (req, res) => {
  res.send("/www/index");
});

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`);
});
