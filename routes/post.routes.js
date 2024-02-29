const express = require("express");
const { auth } = require("../middlewares/auth");
const {
  getPosts,
  getPostById,
  editPost,
  deletePost,
  uploadPicture,
  addPost,
} = require("../controllers/post.controller");
const upload = require("../middlewares/upload");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/image/:id", upload.single("postImage"), uploadPicture);

router.post("/", auth, addPost);

router.delete("/:id", auth, deletePost);

router.patch("/:id", auth, editPost);

module.exports = router;
