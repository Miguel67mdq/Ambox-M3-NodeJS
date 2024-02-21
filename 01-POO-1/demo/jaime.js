const jaime = {
  nombre: "Jaime",
  apellidoPaterno: "Cervantes",
  apellidoMaterno: "Velasco",
  edad: 33,
  getNombre: function () {
    return "Jaime Cervantes Velasco";
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
  postDireccion: function ({direccion}) {
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
};

module.exports = jaime;
