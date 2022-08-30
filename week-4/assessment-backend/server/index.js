const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getCookie,
  getPassword,
  getRestaurant,
  postRestaurant,
} = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/cookie", getCookie);
app.get("/api/password", getPassword);
app.get("/api/restaurant",  getRestaurant);
app.post("/api/restaurant",  postRestaurant);

app.listen(4000, () => console.log("Server running on 4000"));
