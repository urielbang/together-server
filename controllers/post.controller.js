const { uploadToCloudinary } = require("../cludinaryFloder/cloudinary");
const { Post } = require("../models/post.model");

const addPost = async (req, res) => {
  try {
    const body = await req.body;
    console.log(body);
    const newPost = await new Post({ ...body });

    body.user = await req.user.id;
    await newPost.save();
    return res.send(newPost);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("likes")
      .populate("user")
      .populate("comments");

    return res.send(posts);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const postFound = await Post.findOne({ _id: id })
      .populate("likes")
      .populate("user")
      .populate("comments");
    if (postFound) {
      return res.send(postFound);
    } else {
      res.send("not such post");
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const postRemoved = await Post.findByIdAndDelete(id);
    return res.send(postRemoved);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const body = await req.body;
  console.log(body, id);
  try {
    const post = await Post.findByIdAndUpdate(id, { ...body }, { new: true });
    console.log(post);
    return res.send(post);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const uploadPicture = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("user image uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  addPost,
  editPost,
  getPostById,
  getPosts,
  deletePost,
  uploadPicture,
};
