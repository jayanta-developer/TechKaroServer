const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  image: String,
  number: String,
  role: {
    type: String,
    required: true,
    enum: ["Client", "Agent"],
  },
});

module.exports = mongoose.model("User", UserSchema);
