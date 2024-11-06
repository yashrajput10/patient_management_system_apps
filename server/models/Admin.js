const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: false },
    imagePublicId: { type: String, required: false },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    // hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
    hospital: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Admin', AdminSchema);
