const bcrypt = require('bcryptjs');

const seededPasswordHash = bcrypt.hashSync('StrongPass123!', 10);

const database = {
  users: [
    { id: 1, email: 'user@example.com', password: seededPasswordHash, name: 'John Doe', createdAt: new Date() },
    { id: 2, email: 'newuser@example.com', password: seededPasswordHash, name: 'New User', createdAt: new Date() },
    { id: 3, email: 'anotheruser@example.com', password: seededPasswordHash, name: 'Another User', createdAt: new Date() }
  ],
  products: [
    { 
      id: 1, 
      name: 'Laptop', 
      description: 'Gaming Laptop', 
      price: 999.99, 
      category: 'Electronics', 
      image: 'laptop.jpg', 
      stock: 10,
      createdAt: new Date()
    },
    { 
      id: 2, 
      name: 'Mouse', 
      description: 'Wireless Mouse', 
      price: 29.99, 
      category: 'Accessories', 
      image: 'mouse.jpg', 
      stock: 50,
      createdAt: new Date()
    },
    {   
      id: 3,
      name: 'Keyboard',
      description: 'Mechanical Keyboard',
      price: 79.99,
      category: 'Accessories',
      image: 'keyboard.jpg',
      stock: 30,
      createdAt: new Date()
    }
  ]
};

module.exports = database;
