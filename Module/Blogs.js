const mongoose = require("mongoose");

const SummeryItem = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summarys: [{ summary: String }],
});

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [],
  date: String,
  blogText: [SummeryItem],
  meta_title: {
    type: String,
    required: true,
  },
  meta_description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
