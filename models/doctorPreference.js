const mongoose = require('mongoose');

const TimeSlotSchema = {
    from: Date,
    to: Date,
};

const AvailabilitySchema = {
    monday: TimeSlotSchema,
    tuesday: TimeSlotSchema,
    wednesday: TimeSlotSchema,
    thursday: TimeSlotSchema,
    friday: TimeSlotSchema,
    saturday: TimeSlotSchema,
    sunday: TimeSlotSchema,
};

// Define the Doctor preference model
const DoctorPreferenceSchema = new mongoose.Schema({
    ClinicId: {
        type: Number,
        default: null,
    },
    DoctorId: {
        type: Number,
        default: null,
    },
    MeetingDuration: {
        type: Number,
        default: null,
    },
    Availability: {
        type: AvailabilitySchema,
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
