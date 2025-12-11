// Mock data for comments
let comments = [
  { id: 1, postId: 1, content: 'Great post!', author: 'Reader1', createdAt: new Date().toISOString() },
  { id: 2, postId: 1, content: 'Thanks for sharing!', author: 'Reader2', createdAt: new Date().toISOString() },
  { id: 3, postId: 2, content: 'Very helpful tutorial', author: 'Learner', createdAt: new Date().toISOString() }
];

const getAllComments = (req, res) => {
  res.status(200).json({
    success: true,
    count: comments.length,
    data: comments
  });
};

const getCommentById = (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === parseInt(id));
  
  if (!comment) {
    return res.status(404).json({
      success: false,
      error: `Comment with ID ${id} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: comment
  });
};

const createComment = (req, res) => {
  const { postId, content, author } = req.body;
  
  if (!postId || !content) {
    return res.status(400).json({
      success: false,
      error: 'postId and content are required'
    });
  }
  
  const newComment = {
    id: comments.length + 1,
    postId: parseInt(postId),
    content,
    author: author || 'Anonymous',
    createdAt: new Date().toISOString()
  };
  
  comments.push(newComment);
  
  res.status(201).json({
    success: true,
    message: 'Comment created successfully',
    data: newComment
  });
};

const updateComment = (req, res) => {
  const { id } = req.params;
  const { content, author } = req.body;
  
  const commentIndex = comments.findIndex(c => c.id === parseInt(id));
  
  if (commentIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `Comment with ID ${id} not found`
    });
  }
  
  comments[commentIndex] = {
    ...comments[commentIndex],
    content: content || comments[commentIndex].content,
    author: author || comments[commentIndex].author,
    updatedAt: new Date().toISOString()
  };
  
  res.status(200).json({
    success: true,
    message: `Comment ${id} updated successfully`,
    data: comments[commentIndex]
  });
};

const deleteComment = (req, res) => {
  const { id } = req.params;
  
  const commentIndex = comments.findIndex(c => c.id === parseInt(id));
  
  if (commentIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `Comment with ID ${id} not found`
    });
  }
  
  comments.splice(commentIndex, 1);
  
  res.status(200).json({
    success: true,
    message: `Comment ${id} deleted successfully`,
    data: null
  });
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};