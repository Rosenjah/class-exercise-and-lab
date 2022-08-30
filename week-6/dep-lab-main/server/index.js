const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "/../public")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/landing.html"));
});
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log("Listening of 4005");
});
