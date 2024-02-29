const moongose = require("mongoose");

const UserShema = moongose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  imageUrl: { type: String },
  publicId: { type: String },
});

const User = moongose.model("User", UserShema);

module.exports = { User };
