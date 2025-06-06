const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../Controller/Category");

const {
  GetAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../Controller/Product");

const {
  createBlog,
  getAllBlogs,
  updateBlogs,
  deleteBlos,
  getBlogById,
} = require("../Controller/Blogs");

const { createUser, getAllUsers, getUserById } = require("../Controller/Users");

const {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../Controller/Review");

//review
router.post("/review/create", createReview);
router.get("/review", getAllReviews);
router.get("/review/:id", getReviewById);
router.post("/review/update/:id", updateReview);
router.post("/review/delete/:id", deleteReview);

//Category
router.get("/categories", getAllCategory);
router.post("/category/create", createCategory);
router.get("/category/:id", getCategoryById);
router.post("/category/update/:id", updateCategory);
router.post("/category/delete/:id", deleteCategory);

//Product
router.get("/products", GetAllProducts);
router.post("/product/create", createProduct);
router.get("/product/:id", getProductById);
router.post("/product/update/:id", updateProduct);
router.post("/product/delete/:id", deleteProduct);

//Blogs
router.post("/blog/create", createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/blog/update/:id", updateBlogs);
router.post("/blog/delete/:id", deleteBlos);

//User
router.post("/user/create", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);

module.exports = router;
