const express = require('express');
const router = express.Router();

const postRouter = require('./posts.routes');
const commentRouter = require('./comments.routes');
const userRouter = require('./users.routes');


router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/users', userRouter);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Blogify API is healthy and running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

module.exports = router;