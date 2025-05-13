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
  createBlog,
  getAllBlogs,
  updateBlogs,
  deleteBlos,
  getBlogById,
} = require("../Controller/Blogs");

const { createUser, getAllUsers } = require("../Controller/Users");

//Category
router.get("/categorys", getAllCategory);
router.post("/category/create", createCategory);
router.get("/category/:id", getCategoryById);
router.post("/category/update/:id", updateCategory);
router.post("/category/delete/:id", deleteCategory);

//Blogs
router.post("/blog/create", createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/blog/update/:id", updateBlogs);
router.post("/blog/delete/:id", deleteBlos);

//User
router.post("/user/create", createUser);
router.get("/users", getAllUsers);

module.exports = router;
