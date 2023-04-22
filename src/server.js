const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

// Create express app
const app = express();

// Configure app to use bodyParser for parsing JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register routes
app.use('/api', routes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
  });

