const express = require('express');
const router = express.Router();

const {createInquiry, getallInquiries} = require('../controllers/inquiryController');

router.post('/', createInquiry);
router.get('/', getallInquiries);

module.exports = router;