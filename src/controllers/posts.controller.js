// Mock data - will be replaced with database in Module 3
let posts = [
  { id: 1, title: 'First Blog Post', content: 'Welcome to Blogify!', author: 'Admin', createdAt: new Date().toISOString() },
  { id: 2, title: 'Express.js Tutorial', content: 'Learn how to build APIs with Express', author: 'Developer', createdAt: new Date().toISOString() }
];

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return res.status(404).json({
      success: false,
      error: `Post with ID ${id} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: post
  });
};

const createPost = (req, res) => {
  const { title, content, author } = req.body;
  
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author: author || 'Anonymous',
    createdAt: new Date().toISOString()
  };
  
  posts.push(newPost);
  
  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: newPost
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `Post with ID ${id} not found`
    });
  }
  
  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content,
    author: author || posts[postIndex].author,
    updatedAt: new Date().toISOString()
  };
  
  res.status(200).json({
    success: true,
    message: `Post ${id} updated successfully`,
    data: posts[postIndex]
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `Post with ID ${id} not found`
    });
  }
  
  posts.splice(postIndex, 1);
  
  res.status(200).json({
    success: true,
    message: `Post ${id} deleted successfully`,
    data: null
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};