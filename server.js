const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

// Import your router
const router = require('./routes/user');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Apply the router middleware
app.use('/', router);
require('./scripts/exelTomongo');
// importData();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
