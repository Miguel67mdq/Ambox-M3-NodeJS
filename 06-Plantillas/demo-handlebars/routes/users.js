var express = require("express");
var router = express.Router();

const listUser = [
  {
    usuario: "EAMEO",
    password: "123456",
  },
  {
    usuario: "Alvaro",
    password: "contraseña123",
  },
  {
    usuario: "Diego",
    password: "boquitasolouno123",
  },
];

/* GET users listing. */
router.post("/login", function (req, res, next) {
  console.log(req.body.user)
  console.log(req.body.password)
});

module.exports = router;
