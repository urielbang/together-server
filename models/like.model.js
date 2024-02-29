const mongoose = require("mongoose");

const likeShema = mongoose.Schema({
  date: { type: "String", default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

const Like = mongoose.model("Like", likeShema);

module.exports = { Like };
