const moongose = require("mongoose");

const commentShema = moongose.Schema({
  content: { type: "String", required: true },
  Date: { type: "Date", default: Date.now() },
  user: { type: moongose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: moongose.Schema.Types.ObjectId, ref: "Post", required: true },
});

const Comment = moongose.model("Comment", commentShema);

module.exports = { Comment };
