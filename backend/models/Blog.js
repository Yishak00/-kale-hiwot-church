// models/Blog.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true }, // Store the image filename
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
