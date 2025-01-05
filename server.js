// server.js
const express = require('express');
const path = require('path');
const app = express();
const cryptoRouter = require('./src/routes/crypto');

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes for cryptocurrency data
app.use('/crypto', cryptoRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

