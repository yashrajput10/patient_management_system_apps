const Patient = require('../models/Patient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const cloudinary = require('../utils/cloudinaryConfig');
const otps = {};

// Register Patient
exports.registerPatient = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber,
        age, height, weight, gender,
        bloodGroup, Dob, country, state, city, address, password, confirmPassword
    } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await Patient.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Patient with this email already exists.' });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password and confirm password do not match.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new patient
        const patient = new Patient({
            firstName,
            lastName,
            email,
            phoneNumber,
            age,
            height,
            weight,
            gender,
            bloodGroup,
            Dob,
            country,
            state,
            city,
            address,
            password: hashedPassword
        });

        // Save the patient
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login Patient
exports.loginPatient = async (req, res) => {
    const { email, password } = req.body;
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

// Get Patients
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patients.", error });
    }
};

// Update Patient
exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const existingPatient = await Patient.findById(id);
        if (!existingPatient) {
            return res.status(404).json({ message: "Patient not found." });
        }


        if (req.files.image) {

            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
                folder: "patients",
            });

            await cloudinary.uploader.destroy(existingPatient.imagePublicId);


            updateFields.image = result.secure_url;
            updateFields.imagePublicId = result.public_id;
        }

        if (updateFields.password) {
            updateFields.password = existingPatient.password
        }
        const updatedPatient = await Patient.findByIdAndUpdate(id, updateFields, { new: true });
        res.status(200).json(updatedPatient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating admin.", error });
    }
};

// Delete Patient
exports.deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found." });
        }
        await cloudinary.uploader.destroy(patient.imagePublicId);
        await Patient.findByIdAndDelete(id);
        res.status(200).json({ message: "Patient deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Patient.", error });
    }
};


// Change Password
exports.changePassword = async (req, res) => {
    try {
        const { patientId } = req.params;
        const { currentPassword, newPassword, confirmPassword } = req.body;

        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: "patient not found." });
        }

        const isMatch = await bcrypt.compare(currentPassword, patient.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect." });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "New password and confirm password do not match." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        patient.password = hashedPassword;
        await patient.save();

        res.status(200).json({ message: "Password updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error changing password.", error });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email, phoneNumber } = req.body;
    let user;

    if (email) {
        user = await Patient.findOne({ email });
    } else if (phoneNumber) {
        user = await Patient.findOne({ phoneNumber });
    }

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    otps[user._id] = { otp, expires: Date.now() + parseInt(process.env.OTP_EXPIRATION) };

    await sendEmail(user.email, 'Password Reset OTP', `Your OTP is: ${otp}`);

    res.status(200).json({ message: 'OTP sent' });
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
    const { userId, otp } = req.body;

    if (!otps[userId] || otps[userId].otp !== otp || Date.now() > otps[userId].expires) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    delete otps[userId];
    res.status(200).json({ message: 'OTP verified', userId });
};

// Reset Password
exports.resetPassword = async (req, res) => {
    const { userId, newPassword } = req.body;

    const patient = await Patient.findById(userId);
    if (!patient) {
        return res.status(400).json({ message: 'User not found' });
    }

    patient.password = await bcrypt.hash(newPassword, 10);
    await patient.save();

    res.status(200).json({ message: 'Password has been reset' });
};

