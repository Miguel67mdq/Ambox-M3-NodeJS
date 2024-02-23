const express = require("express");
const app = express();
const jaime = require("../jaime");

app.delete("/deleteDireccion", function (req, res) {
  jaime.deleteDireccion();
  return res.send(jaime);
});

app.delete("/deleteEdad", function (req, res) {
  jaime.deleteEdad();
  return res.send(jaime);
});

app.delete("/deleteNombre", function (req, res) {
  jaime.deleteNombre();
  return res.send(jaime);
});
app.delete("/deleteApellidoMaterno", function (req, res) {
  jaime.deleteApellidoMaterno();
  return res.send(jaime);
});
app.delete("/deleteApellidoPaterno", function (req, res) {
  jaime.deleteApellidoPaterno();
  return res.send(jaime);
});

module.exports = app;
