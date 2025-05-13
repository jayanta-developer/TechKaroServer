const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const cors = require("cors");
const mongoose = require("mongoose");

const express = require("express");

//Routers
const Router = require("./Router");

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("Database connected successful!"))
  .catch((err) => console.log("Database is not concocted to the server", err));

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());

// Router Mounting
App.use("/tech-karo/api/", Router);

// Export the app
module.exports = App;
