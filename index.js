// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Dummy user data for demonstration purposes
const users = [
  { id: 1, username: 'john_doe', email: 'john@example.com', password: 'password123' },
  { id: 2, username: 'jane_smith', email: 'jane@example.com', password: 'password456' },
];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  // Implement user registration logic here (e.g., add the user to a database)
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Implement user login logic here (e.g., verify credentials against a database)
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
