const moongose = require("mongoose");

const UserShema = moongose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  imageUrl: { type: String },
  publicId: { type: String },
});

const User = moongose.model("User", UserShema);

module.exports = { User };
