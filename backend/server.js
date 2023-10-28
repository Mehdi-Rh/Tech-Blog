// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// server.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// server.js

const User = require("./models/User");

// Get all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Get a single user by ID
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

// Create a new user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// Update a user
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted successfully");
});
