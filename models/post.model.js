const mongoose = require("mongoose");

const postShema = mongoose.Schema({
  content: { type: "String", required: true },
  likes: [{ type: mongoose.Types.ObjectId, ref: "Like" }],
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  createdAt: {
    type: "Date",
    default: Date.now(),
  },
  updatedAt: {
    type: "Date",
    default: Date.now(),
  },
  privacy: {
    type: "String",
    default: "public",
  },
  imageUrl: { type: String },
  publicId: { type: String },
});

const Post = mongoose.model("Post", postShema);

module.exports = { Post };
