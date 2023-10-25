const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminuser:lqRsyJMVL3a6i6g1@cluster0.ogkfpb5.mongodb.net/final_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle database connection events
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;