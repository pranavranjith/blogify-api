
const getAllPosts = (req, res) => {

  res.status(200).json({ message: 'Fetching all blog posts...' });
  
  
  const posts = [
    { id: 1, title: 'My First Post' },
    { id: 2, title: 'Another Post' }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    data: posts
  });
};


module.exports = {
  getAllPosts
};