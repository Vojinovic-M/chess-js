//  mongoose which is a JS library to create a connection between MongoDB and Node.js app.
// Nodemon is a tool to observe the changes in the file and restarts the server.

const express = require('express');
const path = require('path');
const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});