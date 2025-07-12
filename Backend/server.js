// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRoutes = require('./Routes/adminRoutes');


// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Allows requests from frontend
app.use(express.json()); // Parses incoming JSON body
app.use('/api/admin', adminRoutes);

const inquiryRoutes = require('./Routes/inquiryRoutes');
app.use('/api/inquiry', inquiryRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send('KR Heat Treatment API is running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
