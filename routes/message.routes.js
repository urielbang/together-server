const express = require("express");
const {
  addMessage,
  getMessges,
  editMessage,
  deleteMessgae,
} = require("../controllers/message.controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, addMessage);

router.get("/", auth, getMessges);

router.patch("/:id", auth, editMessage);

router.delete("/:id", auth, deleteMessgae);

module.exports = router;
