const { Message } = require("../models/message.model");

const addMessage = async (req, res) => {
  try {
    const body = await req.body;
    const newMessage = await new Message({ ...body });

    await newMessage.save();
    return res.send(newMessage);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const getMessges = async (req, res) => {
  try {
    const messages = await Message.find({});
    return res.send(messages);
  } catch (error) {
    console.log(errors);
    res.send("something wrong");
  }
};

const editMessage = async (req, res) => {
  try {
    const body = await req.body;
    const { id } = req.params;
    const updatedMessages = await Message.findByIdAndUpdate(id, body);
    return res.send(updatedMessages);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deleteMessgae = async (req, res) => {
  try {
    const { id } = req.params;
    const messageRemoved = await Message.findByIdAndDelete(id);
    return res.send(messageRemoved);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

module.exports = { addMessage, getMessges, editMessage, deleteMessgae };
