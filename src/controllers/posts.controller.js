


const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: 'Introduction to Express', content: 'Learning the basics of Express.js' },
    { id: 2, title: 'Routing in Express', content: 'Understanding how routing works in Express' },
    { id: 3, title: 'Middleware Explained', content: 'Deep dive into Express middleware' }
  ];
  
  res.status(200).json({
    message: 'All posts fetched successfully',
    data: posts,
    count: posts.length
  });
};


const getPostById = (req, res) => {
  
  const postId = req.params.postId;
  
  
  res.status(200).json({
    message: `Fetching data for post with ID: ${postId}`,
    data: {
      id: postId,
      title: `Blog Post ${postId}`,
      content: `This is the detailed content of post ${postId}.`,
      author: 'John Doe',
      date: '2024-01-20',
      views: 150
    }
  });
};


module.exports = {
  getAllPosts,
  getPostById
};