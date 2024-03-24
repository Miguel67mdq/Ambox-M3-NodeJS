var express = require("express");
var router = express.Router();

id = 0;

let posts = [
  {
    id: id,
    title: "Test",
    contents: "Este es un post de test",
  },
];

/* GET pages. */
router.get("/", function (req, res, next) {
  res.render("getPost", { title: "Express", posts: posts });
});
router.get("/createPost", function (req, res, next) {
  res.render("postPost", { title: "Express", posts: posts });
});

router.get("/update/:idPost", function (req, res, next) {
  const { idPost } = req.params;
  res.render("updatePost", { title: "Express", post: posts[idPost] });
});

router.get("/delete", function (req, res, next) {
  res.render("deletePost", { title: "Express" });
});

//ACTIONS in list of post

router.post("/post", function (req, res) {
  const { title, contents } = req.body;
  data = { title, contents, id: id++ };
  posts.push(data);
  res.send(200);
});

router.put("/post/:idPost", function (req, res) {
  const { idPost } = req.params;
  const { title, contents } = req.body;

  posts[idPost] = {
    id: idPost,
    title: title,
    contents: contents,
  };
  res.render("getPost", { title: "Express", posts: posts });
});

router.delete("/post/:idPost", function (req, res) {
  const { idPost } = req.params;
  posts.splice(idPost, 1);
  res.render("getPost", { title: "Express", posts: posts });

});

module.exports = router;
