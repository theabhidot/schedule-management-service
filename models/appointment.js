const mongoose = require('mongoose');

/* Define the Appointment model to store appointment data */
const AppointmentSchema = new mongoose.Schema({
    AppointmentTime: {
        type: Date,
    },
    ClinicId: {
        type: Number,
        default: null,
    },
    DoctorId: {
        type: Number,
        default: null,
    },
    PatientId: {
        type: Number,
        default: null,
    },
    Status: {
        type: String,
        default: 'none',
    },
    Details: {
        type: Map,
        default: null,
    },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
