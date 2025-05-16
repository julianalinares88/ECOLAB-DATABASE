const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.get("/search", postsController.searchPostsByTitle);

module.exports = router;
