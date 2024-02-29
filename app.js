const express = require("express");
const app = express();
const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");
const likeRoute = require("./routes/like.routes");
const commentRoute = require("./routes/comment.routes");
const messageRoute = require("./routes/message.routes");
const cors = require("cors");

//! app uses
app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/likes", likeRoute);
app.use("/api/v1/comments", commentRoute);
app.use("/api/v1/messages", messageRoute);

module.exports = app;
