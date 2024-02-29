const moongose = require("mongoose");

const messageShema = moongose.Schema({
  sender: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Message = moongose.model("Message", messageShema);

module.exports = { Message };
