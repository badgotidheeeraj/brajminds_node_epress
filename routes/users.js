const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/UserData")
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  content: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema); // consistent naming with schema
module.exports = User;
