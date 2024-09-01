require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const businessRoutes = require('./routes/business');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());


// Routes
app.use('/api/businesses', businessRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});