const express = require('express');
const router = express.Router();

// 1. IMPORT THE CONTROLLER
const postController = require('../controllers/posts.controller.js');

// 2. USE THE CONTROLLER FUNCTION
router.get('/', postController.getAllPosts);

module.exports = router;