const mongoose = require('mongoose');

/* Define the Doctor preference for meeting duration and available slots model */
const DoctorPreferenceSchema = new mongoose.Schema({
    ClinicId: {
        type: Number,
        default: null,
    },
    DoctorId: {
        type: Number,
        unique: true,
    },
    MeetingDuration: {
        type: Number,
        default: null,
    },
    Availability: {
        type: [[Date]],
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

module.exports = mongoose.model('DoctorPreference', DoctorPreferenceSchema);
