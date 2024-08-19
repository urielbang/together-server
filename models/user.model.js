const moongose = require("mongoose");

const UserShema = moongose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true, minlength: 8 },
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
