const express = require("express");
const {
  addComment,
  editComment,
  deleteComment,
  getComments,
} = require("../controllers/comment.controller");

const { auth } = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, getComments);

router.post("/", auth, addComment);

router.delete("/:id", auth, deleteComment);

router.patch("/:d", auth, editComment);
module.exports = router;
