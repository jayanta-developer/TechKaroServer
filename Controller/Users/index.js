const User = require("../../Module/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, number, message, subject, leads, date } = req.body;

    // Check if user with the given email exists
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      // Update existing user
      name ? (existingUser.name = name) : null;
      number ? (existingUser.number = number) : null;
      message ? (existingUser.message = message) : null;
      subject ? (existingUser.subject = subject) : null;
      date ? (existingUser.date = date) : null;

      const updatedUser = await existingUser.save();
      res.status(200).json(updatedUser);
    } else {
      // Create new user
      const newUser = new User({
        name,
        email,
        number,
        message,
        subject,
        leads,
        date,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("User creation error:", error);
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const userId = req?.params?.id;
    if (!userId) {
      res.status(404).json({ message: "User id not found!" });
    }
    const user = await User.findById(userId);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
