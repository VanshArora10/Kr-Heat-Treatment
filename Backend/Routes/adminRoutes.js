// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
