const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
  KeyInsights: [
    {
      title: String,
      value: String,
    },
  ],
  AdvertisingCost: [
    {
      title: String,
      value: String,
    },
  ],
  About: {
    title: String,
    summary: String,
  },
  userCount: {
    title: String,
    count: String,
  },
  infoCount: {
    title: String,
    count: String,
  },
  summary: [
    {
      title: String,
      summarys: [
        {
          summary: String,
        },
      ],
    },
  ],
  bannerData: {
    title: String,
    summary: String,
    img: String,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
