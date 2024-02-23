const { Router } = require("express");
const router = Router();

const jaimeGet = require("./get");
const jaimePost = require("./post");
const jaimePut = require("./put");
const jaimetDelete = require("./delete");

router.use("/get", jaimeGet);
router.use("/post", jaimePost);
router.use("/put", jaimePut);
router.use("/", jaimetDelete);

module.exports = router;
