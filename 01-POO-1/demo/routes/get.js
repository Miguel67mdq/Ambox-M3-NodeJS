const express = require("express");
const app = express();
const jaime = require('../jaime')

app.get("/", function (req, res) {
  res.send(200);
});

app.get("/getNombre", function (req, res) {
  res.send(jaime.getNombre());
});
app.get("/getApellidoMaterno", function (req, res) {
  res.send(jaime.getApellidoMaterno());
});

app.get("/getApellidoPaterno", function (req, res) {
  res.send(jaime.getApellidoPaterno());
});

app.get("/getEdad", function (req, res) {
  res.send(`${jaime.getEdad()}`);
});

module.exports = app;