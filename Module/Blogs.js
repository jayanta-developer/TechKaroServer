const mongoose = require("mongoose");

const SummeryItem = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summarys: [{ summary: String }],
  image: String,
});

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  metaKeyword: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: String,
  blogText: [SummeryItem],
});

module.exports = mongoose.model("Blog", BlogSchema);
