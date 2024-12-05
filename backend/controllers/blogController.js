// controllers/blogController.js
const Blog = require("../models/Blog");
const path = require("path");

// Post a new blog
const postBlog = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const image = req.file.filename; // Get the uploaded image filename

    if (!title || !content || !image) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newBlog = new Blog({
      title,
      content,
      date: date, // Handle date input
      image,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog posted successfully!", blog: newBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error posting blog" });
  }
};

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching blogs" });
  }
};

module.exports = { postBlog, getBlogs };
