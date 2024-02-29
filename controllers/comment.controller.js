const { Post } = require("../models/post.model");
const { Comment } = require("../models/comment.model");

const addComment = async (req, res) => {
  const { post, user, content } = req.body; //

  try {
    const newComment = new Comment({
      user: user,
      post: post,
      content: content,
    });
    await newComment.save();

    await Post.findByIdAndUpdate(
      post,
      { $push: { comments: newComment._id } },
      { new: true, upsert: true }
    );

    return res.json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

const getComments = async (req, res) => {
  const comments = await Comment.find({});
  try {
    res.send(comments);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const commentRemoved = await Comment.findByIdAndDelete(id);
    if (!commentRemoved) {
      return res.status(404).send("Like not found");
    }

    await Post.findByIdAndUpdate(commentRemoved.post, {
      $pull: { comments: commentRemoved._id },
    });

    return res.send(commentRemoved);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

const editComment = async (req, res) => {
  const { id } = req.params;
  const body = await req.body;

  try {
    const comment = await Comment.findByIdAndUpdate(id, body);
    return res.send(comment);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

module.exports = { addComment, deleteComment, editComment, getComments };
