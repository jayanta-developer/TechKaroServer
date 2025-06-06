const Review = require("../../Module/Review");

exports.createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    console.log(newReview);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create review", details: err.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", details: err.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.status(200).json(review);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch review", details: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    if (!updatedReview)
      return res.status(404).json({ error: "Review not found" });
    res.status(200).json(updatedReview);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update review", details: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ error: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete review", details: err.message });
  }
};
