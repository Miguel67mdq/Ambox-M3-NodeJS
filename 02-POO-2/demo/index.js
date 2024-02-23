const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Listen_Port = 3000;

app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});

var contador = 0;
const Persona = function (
  nombre,
  apellidoMaterno,
  apellidoPaterno,
  edad,
  provincia,
  localidad,
  calle,
  altura,
  dni
) {
  //Datos publicos
  this.id = contador++;
  this.nombre = nombre;
  this.apellidoMaterno = apellidoMaterno;
  this.apellidoPaterno = apellidoPaterno;
  this.edad = edad;
  this.getEdad = dameEdad;
  this.direccion = {
    provincia: provincia,
    localidad: localidad,
    calle: calle,
    altura: altura,
  };
  this.getNombreCompleto = function () {
    return `${this.nombre}, ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  };

  //Datos privados
  var dni = dni;
  var cuil = `48 - ${dni} - 8`;
  var nroTramiteDNI = 89456123;

  function datosPrivados() {
    console.info(`DNI: ${dni}`);
    console.info(`CUIL: ${cuil}`);
    console.info(`Numero de tramite DNI: ${nroTramiteDNI}`);
  }

  datosPrivados();
};

const Oficio = function (nombre, años, sueldo) {
  /* Datos publicos */
  this.nombre = nombre;
  this.añosExperiencia = años;

  this.nombreOficio = () => {
    return this.nombre;
  };

  /* Datos Prviados  */
  var sueldo = sueldo;
  function dimeCuantoGanas() {
    console.log(sueldo);
  }

  dimeCuantoGanas();
};

function dameEdad() {
  return this.edad;
}

const Nahuel = new Persona(
  "Nahuel",
  "Morales",
  "Sanchez",
  28,
  "Corrientes",
  "Corrientes",
  "Fake Street",
  "123"
);

const Francisco = new Persona(
  "Francisco",
  "Perez",
  "Molina",
  32,
  "Chaco",
  "Resistencia",
  "Fake Street",
  "123"
);

Nahuel.prototype = new Oficio("Programador", 3, 300000);
Francisco.prototype = new Oficio("Electricista", 5, 300000);
console.log(Nahuel.getNombreCompleto());
console.log(Nahuel.getEdad());
console.log("Oficio de Nahuel : ", Nahuel.prototype.nombreOficio());
console.log("Oficio de Francisco : ", Francisco.prototype.nombreOficio());
console.log("Personas hasta ahora", contador)