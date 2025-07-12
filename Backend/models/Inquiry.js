const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    companyName: { type: String }, // ← updated
    email: { type: String, required: true },
    phone: { type: String, required: true },
    partName: { type: String, required: true }, // ← updated
    material: { type: String }, // ← new
    quantity: { type: Number }, // made optional
    treatmentType: { type: String }, // ← new
    deadline: { type: String }, // ← new
    notes: { type: String }, // ← new
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', InquirySchema);
