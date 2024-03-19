const express = require("express");
const bodyParser = require("body-parser");

const app = express("/post", function (req, res) {});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Listen_Port = 3000;

app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});

let id = 0;

let posts = [];

/* GET Posts */
app.get("/posts", function (req, res) {
  return res.send(posts);
});
/* POST Posts */
app.post("/posts", function (req, res) {
  const { title, contents } = req.body;

  if (title.length !== 0 && contents.length !== 0) {
    posts.push({ title: title, contents: contents, id: id++ });
    return res.send(posts);
  } else {
    return res.sendStatus(204);
  }
});
/* PUT Posts */
app.put("/posts/:idPosts", function (req, res) {
  const { title, contents } = req.body;
  const { idPosts } = req.params;

  /* Si no hay id entonces no seguimos */
  if (!idPosts) {
    return res.sendStatus(400);
  }

  if (title.length !== 0 && contents.length !== 0) {
    let aux = posts.findIndex((item) => item.id == idPosts);
    posts[aux] = { title: title, contents: contents, id: idPosts };
    return res.send(posts);
  } else {
    return res.sendStatus(204);
  }
});
/* DELETE Posts */
app.delete("/posts/:idPosts", function (req, res) {
  const { idPosts } = req.params;
  if (!idPosts) {
    return res.sendStatus(400);
  }
  let aux = posts.findIndex((item) => item.id == idPosts);

  // delete posts[aux];
  posts.splice(aux, 1)
  return res.send(posts);
});
