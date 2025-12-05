const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: 'Introduction to Express', content: 'Learning the basics of Express.js' },
    { id: 2, title: 'Routing in Express', content: 'Understanding how routing works in Express' },
    { id: 3, title: 'Middleware Explained', content: 'Deep dive into Express middleware' }
  ];

  res.status(200).json({
    success: true,
    data: {
      message: 'All posts fetched successfully',
      posts: posts,
      count: posts.length
    }
  });
};

const getPostById = (req, res) => {
  const postId = parseInt(req.params.postId);
  const posts = [
    { id: 1, title: 'Introduction to Express', content: 'Learning the basics of Express.js' },
    { id: 2, title: 'Routing in Express', content: 'Understanding how routing works in Express' },
    { id: 3, title: 'Middleware Explained', content: 'Deep dive into Express middleware' }
  ];
  
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.status(200).json({
      success: true,
      data: {
        message: `Post with ID: ${postId} fetched successfully`,
        post: post
      }
    });
  } else {
    res.status(404).json({
      success: false,
      error: {
        message: `Post with ID: ${postId} not found`
      }
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById
};