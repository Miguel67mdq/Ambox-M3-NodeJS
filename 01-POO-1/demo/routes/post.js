const express = require("express");
const app = express();
const jaime = require("../jaime");

app.post("/postDireccion", function (req, res) {
  jaime.postDireccion(req.body);
  return res.send(jaime);
});


module.exports = app;