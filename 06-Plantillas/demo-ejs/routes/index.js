var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/posts", async function (req, res, next) {
  const { data } = await axios.get("http://localhost:3000/posts");
  res.render("posts", { title: "Publicaciones de tus amigos", post: data });
});

router.get("/posts/crear", function (req, res, next) {
  res.render("crearPost", { title: "Creacion de publicaciones" });
});

router.post("/post", async function (req, res) {
  const { title, contents } = req.body;
  data = { title, contents };
  await axios.post("http://localhost:3000/posts", data);

  res.send(200)
});

module.exports = router;
