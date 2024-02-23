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
let contador = 0;
class Persona {
  constructor(
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
    this.id = contador++;
    this.nombre = nombre;
    this.apellidoMaterno = apellidoMaterno;
    this.apellidoPaterno = apellidoPaterno;
    this.edad = edad;
    this.direccion = {
      provincia: provincia,
      localidad: localidad,
      calle: calle,
      altura: altura,
    };
  }
  get NombreCompleto() {
    return `${this.nombre}, ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  }

  get Nombre() {
    return this.nombre;
  }
  set Nombre(nombre) {
    this.nombre = nombre;
  }
}

class Oficio {
  constructor(nombre, años, sueldo) {
    this.nombre = nombre;
    this.añosExperiencia = años;
  }
  nombreOficio() {
    return this.nombre;
  }
}

class Programador extends Oficio {
  constructor(nombre, años, sueldo) {
    this.javascript = true;
  }
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
Francisco.prototype = new Oficio("Electricista", 5, 200000);
console.log(Nahuel.NombreCompleto);
console.log(Nahuel.Nombre);
console.log("Oficio de Nahuel : ", Nahuel.prototype.nombreOficio());
console.log("Oficio de Francisco : ", Francisco.prototype.nombreOficio());
console.log("Personas hasta ahora", contador);
