const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Panding", "Approve"],
    default: "Panding",
  },
});

module.exports = mongoose.model("review", ReviewSchema);
