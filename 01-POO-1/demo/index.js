const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Listen_Port = 3000;

app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});
/* Getter y Setter */


/* ----------- Codigos de estados ------------ */

/* 100 - 199  Information*/
/* 200 - 299  OK*/
/* 300 - 399 Redirect*/
/* 400 - 499 Client */
/* 500 - 599 Server */

/* ------------------------------------------- */

/* ----------------- VERBOS ------------------ */

/* GET Pedir datos */
/* POST Posteando datos */
/* PUT Modificando datos*/
/* DELETE Eliminando datos */

/* ------------------------------------------- */

/* ------------------ DEFINICIONES ----------- */

/* req = Request */
/* res = Response */

/* ------------------------------------------- */

/* ------------------------------------------- */

/* app.[verbo]("/nombredelendpoint")*/

/* ------------------------------------------- */

app.use("/", require('./routes'))




