const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

const { validatePost } = require('../middleware/validation');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', validatePost, postController.createPost);
router.put('/:id', validatePost, postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;