
const express = require('express');
const router = express.Router();
const { createPrescription, getPrescriptionsByPatient, updatePrescription, deletePrescription } = require('../controllers/prescriptionController');
const { isAuthenticatedDoctor } = require('../middlewares/authMiddleware');

router.post('/prescriptions', isAuthenticatedDoctor, createPrescription);
router.get('/prescriptions/patient/:patientId', isAuthenticatedDoctor, getPrescriptionsByPatient);
router.delete('/prescriptions/:id', isAuthenticatedDoctor, deletePrescription);
router.put('/prescriptions/:id', isAuthenticatedDoctor, updatePrescription);

module.exports = router;
