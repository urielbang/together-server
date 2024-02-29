const express = require("express");
const {
  addLike,
  getLikes,
  deleteLike,
  getLikeById,
} = require("../controllers/like.controller");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getLikes);

router.get("/:id", auth, getLikeById);

router.post("/", auth, addLike);

router.delete("/:id", auth, deleteLike);

module.exports = router;
