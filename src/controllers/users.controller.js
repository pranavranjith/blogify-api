// Mock data for users
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', createdAt: new Date().toISOString() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'author', createdAt: new Date().toISOString() }
];

const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: `User with ID ${id} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
};

const createUser = (req, res) => {
  const { name, email, role } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || 'user',
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `User with ID ${id} not found`
    });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    role: role || users[userIndex].role,
    updatedAt: new Date().toISOString()
  };
  
  res.status(200).json({
    success: true,
    message: `User ${id} updated successfully`,
    data: users[userIndex]
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: `User with ID ${id} not found`
    });
  }
  
  users.splice(userIndex, 1);
  
  res.status(200).json({
    success: true,
    message: `User ${id} deleted successfully`,
    data: null
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};