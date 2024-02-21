const express = require("express");
const app = express();
const jaime = require('../jaime')

app.put("/putDireccion/provincia", function (req, res) {
  const { provincia } = req.body;
  jaime.putDireccionProvincia(provincia)
  return res.send(jaime);
});

app.put("/putDireccion/localidad", function (req, res) {
  const { localidad } = req.body;
  jaime.putDireccionLocalidad(localidad)
  return res.send(jaime);
});

app.put("/putDireccion/calle", function (req, res) {
  const { calle } = req.body;
  jaime.putDireccionCalle(calle)
  return res.send(jaime);
});

app.put("/putDireccion/altura", function (req, res) {
  const { altura } = req.body;
  jaime.putDireccionAltura(altura)
  return res.send(jaime);
});


module.exports = app;