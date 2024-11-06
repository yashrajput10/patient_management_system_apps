// models/Prescription.js

const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    instructions: { type: String, required: true },
});

const prescriptionSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    medication: [medicationSchema],
    notes: { type: String },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
