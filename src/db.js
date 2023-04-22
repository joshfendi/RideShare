const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});

module.exports = db;

