const app = require("./app");
const moongose = require("mongoose");
const { config } = require("./config/index");

const PORT = process.env.PORT || 2000;

moongose
  .connect(config.MONGO_URL)
  .then(() => {})
  .then(() => {
    console.log("connected to db");
  });

app.listen(PORT, () => {
  console.log("listening to port" + PORT);
});
