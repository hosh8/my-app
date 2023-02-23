const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, 'Users.json');

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    fs.readFile(usersFile, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Server error');
      }
  
      let users;
      try {
        users = JSON.parse(data).users;
      } catch (err) {
        console.error(err);
        return res.status(500).send('Server error');
      }
  
      if (!Array.isArray(users)) {
        console.error('Invalid JSON data: "users" property is not an array');
        return res.status(500).send('Server error');
      }
  
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        return res.status(401).send('Invalid username or password');
      }
  
      const token = jwt.sign({ sub: user.id }, 'secret', { expiresIn: '1h' });
      res.json({ token });
    });
  });
  

app.listen(port, () => console.log(`Server listening on port ${port}`));
