const Category = require("../../Module/Category");

//Get all category
exports.getAllCategory = async (req, res) => {
  try {
    const Categorys = await Category.find();
    res.status(200).json(Categorys);
  } catch (error) {
    res.status(500).json({ message: "Error getting category", error });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { title, icon } = req.body;
    const newCategory = new Category({ title, icon });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
};

// Update category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { title, icon } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { title, icon },
      { new: true, runValidators: true }
    );
    if (!updatedCategory)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

// Delete category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};
