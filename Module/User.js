const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  leads: {
    type: String,
    required: true,
  },
  date: String,
  message: {
    type: String,
  },
  subject: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
