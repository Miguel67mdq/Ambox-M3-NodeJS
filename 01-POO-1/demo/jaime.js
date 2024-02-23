const jaime = {
  nombre: "Jaime",
  apellidoPaterno: "Cervantes",
  apellidoMaterno: "Velasco",
  edad: 33,
  getNombre: function () {
    return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  },
  getApellidoMaterno: function () {
    return this.apellidoMaterno;
  },
  getApellidoPaterno: function () {
    return this.apellidoPaterno;
  },
  getEdad: function () {
    return this.edad;
  },
  getDireccion: function () {
    return this?.direccion ? this.direccion : "Aun no tengo direccion";
  },
  getProvincia: function () {
    return this.direccion?.provincia
      ? this.direccion.provincia
      : "Aun no tengo provincia";
  },
  getLocalidad: function () {
    return this.direccion?.localidad
      ? this.direccion.localidad
      : "Aun no tengo localidad";
  },
  getCalle: function () {
    return this.direccion.calle ? this.direccion.calle : "Aun no tengo calle";
  },
  getAltura: function () {
    return this.direccion?.altura
      ? this.direccion.altura
      : "Aun no tengo altura";
  },
  postDireccion: function ({ direccion }) {
    this.direccion = direccion;
  },
  putDireccionProvincia: function (provincia) {
    this.direccion.provincia = provincia;
  },
  putDireccionLocalidad: function (localidad) {
    this.direccion.localidad = localidad;
  },
  putDireccionCalle: function (calle) {
    this.direccion.calle = calle;
  },
  putDireccionAltura: function (altura) {
    this.direccion.altura = altura;
  },
  putEdad: function (edad) {
    this.edad = edad;
  },
  putNombre: function (nombre) {
    this.nombre = nombre;
  },
  putApellidoPaternbo: function (apellido) {
    this.apellidoPaterno = apellido;
  },
  putApellidoMaterno: function (apellido) {
    this.apellidoMaterno = apellido;
  },
  deleteDireccion: function () {
    delete this.direccion;
  },
  deleteEdad: function () {
    delete this.edad;
  },
  deleteNombre: function () {
    delete this.nombre;
  },
  deleteApellidoMaterno: function () {
    delete this.apellidoMaterno;
  },
  deleteApellidoPaterno: function () {
    delete this.apellidoPaterno;
  },
  recorrerTodosMisDatos: function () {
    const nombresProps = Object.keys(this);
    console.log(nombresProps);
    nombresProps.forEach((nombreProp) => {
      console.log(jaime[nombreProp]);
    });
  },
};

module.exports = jaime;
