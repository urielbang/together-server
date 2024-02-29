const { Like } = require("../models/like.model");

const { Post } = require("../models/post.model");

const addLike = async (req, res) => {
  const { post, user } = req.body; //

  try {
    const newLike = new Like({
      user: user,
      post: post,
    });
    await newLike.save();

    await Post.findByIdAndUpdate(
      post,
      { $push: { likes: newLike._id } },
      { new: true, upsert: true }
    );

    return res.json(newLike);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

const getLikes = async (req, res) => {
  try {
    const likes = await Like.find({}).populate("user");
    return res.send(likes);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};
const getLikeById = async (req, res) => {
  const { id } = req.params;
  try {
    const likeFound = await Like.find({ post: id }).populate("user");

    if (likeFound) {
      return res.send(likeFound);
    } else {
      res.send("not such post");
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deleteLike = async (req, res) => {
  const { id } = req.params;

  try {
    const likeRemoved = await Like.findByIdAndDelete(id);
    if (!likeRemoved) {
      return res.status(404).send("Like not found");
    }

    await Post.findByIdAndUpdate(likeRemoved.post, {
      $pull: { likes: likeRemoved._id },
    });

    res.send(likeRemoved);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { addLike, getLikes, deleteLike, getLikeById };
