const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  KeyInsights: [],
  AdvertisingCost: [],
  AboutTitle: {
    type: String,
    required: true,
  },
  AboutSummary: {
    type: String,
    required: true,
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
      summary: [
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
});

module.exports = mongoose.model("Product", ProductSchema);
