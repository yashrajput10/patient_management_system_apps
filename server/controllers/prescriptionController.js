
const Prescription = require('../models/Prescription');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');

// Create a new prescription
exports.createPrescription = async (req, res) => {
    try {
        const { appointmentId, patientId, medication, notes } = req.body;
        const id = req.doctor._id;
        const doctorId = id.toString()



        if (!appointmentId || !patientId || !medication || !Array.isArray(medication) || medication.length === 0) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const appointment = await Appointment.findOne({ _id: appointmentId, doctorId });

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found or unauthorized' });
        }

        const newPrescription = new Prescription({
            appointmentId,
            patientId,
            doctorId,
            medication,
            notes,
        });

        await newPrescription.save();

        res.status(201).json({ message: 'Prescription created successfully', newPrescription });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating prescription', error: error.message });
    }
};

// Get prescriptions for a patient
exports.getPrescriptionsByPatient = async (req, res) => {
    try {
        const { patientId } = req.params;
        const id = req.doctor._id;
        const doctorId = id.toString();

        const patient = await Patient.findOne({ _id: patientId, doctorId });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found or unauthorized' });
        }

        const prescriptions = await Prescription.find({ patientId, doctorId }).populate('appointmentId');

        if (!prescriptions.length) {
            return res.status(404).json({ message: 'No prescriptions found for this patient' });
        }

        res.status(200).json({ message: 'Prescriptions retrieved successfully', prescriptions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving prescriptions', error: error.message });
    }
};

// Update a prescription by ID
exports.updatePrescription = async (req, res) => {
    try {
        const { id } = req.params;
        const dId = req.doctor._id;
        const doctorId = dId.toString();
        const { medication, notes } = req.body;

        const prescription = await Prescription.findOne({ _id: id, doctorId });
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found or unauthorized' });
        }

        if (medication && Array.isArray(medication)) {
            prescription.medication = medication;
        }

        if (notes !== undefined) {
            prescription.notes = notes;
        }

        const updatedPrescription = await prescription.save();

        res.status(200).json({ message: 'Prescription updated successfully', updatedPrescription });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating prescription', error: error.message });
    }
};

// Delete a prescription by ID
exports.deletePrescription = async (req, res) => {
    try {
        const { id } = req.params;
        const dId = req.doctor._id;
        const doctorId = dId.toString();

        const prescription = await Prescription.findOne({ _id: id, doctorId });
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found or unauthorized' });
        }

        await Prescription.deleteOne({ _id: id });

        res.status(200).json({ message: 'Prescription deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting prescription', error: error.message });
    }
};