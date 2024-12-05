const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { postBlog } = require('../controllers/blogController');
const { route } = require('./userRoutes');
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // The folder to store the images
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()); // Unique filename
    },
  });
  
  const upload = multer({ storage: storage });

router.post('/create', upload.single('image'), postBlog);
module.exports = router;