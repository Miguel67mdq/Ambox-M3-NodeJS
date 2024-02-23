const express = require("express");
const app = express();
const jaime = require("../jaime");

app.get("/", function (req, res) {
  res.send(jaime);
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

app.get("/getDireccion", function (req, res) {
  return res.send(jaime.getDireccion());
});

app.get("/getLocalidad", function (req, res) {
  return res.send(jaime.getLocalidad());
});

app.get("/getProvincia", function (req, res) {
  return res.send(jaime.getProvincia());
});

app.get("/getCalle", function (req, res) {
  return res.send(jaime.getCalle());
});

app.get("/getAltura", function (req, res) {
  return res.send(jaime.getAltura());
});

app.get("/recorrerJaime", function (req, res) {
  console.log(jaime.__proto__);
  return res.send(jaime.recorrerTodosMisDatos());
});

module.exports = app;
