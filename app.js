const express = require('express');
const mongoose = require('mongoose');
const Appointment = require('./models/appointment');
const DoctorPreference = require('./models/doctorPreference');

const uri =
    'mongodb+srv://admin:admin@cluster0.cqvxfps.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
mongoose.set('strictQuery', true);

/** Connect to the MongoDB database */
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.get('/api/appointments', function (req, res) {
    Appointment.find({}).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.get('/api/appointments/patient/:patientid', function (req, res) {
    Appointment.find({ PatientId: req.params.patientid }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.get('/api/appointments/patient/:patientid/:doctorid', function (req, res) {
    Appointment.find({
        PatientId: req.params.patientid,
        DoctorId: req.params.doctorid,
    }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.get('/api/appointments/doctor/:doctorid', function (req, res) {
    Appointment.find({ DoctorId: req.params.doctorid }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.get('/api/appointments/doctor/:doctorid/:patientid', function (req, res) {
    Appointment.find({
        PatientId: req.params.patientid,
        DoctorId: req.params.doctorid,
    }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.post('/api/bookappointment', (req, res) => {
    const AppointmentTime = req.body.AppointmentTime;
    const PatientId = req.body.PatientId;
    const DoctorId = req.body.DoctorId;
    const ClinicId = req.body.ClinicId;
    const Details = req.body.Details;
    const Status = 'Booked';

    const obj = new Appointment({
        AppointmentTime,
        ClinicId,
        DoctorId,
        PatientId,
        Status,
        Details,
    });

    if (PatientId == null) return res.send({ Error: 'Patient Id is missing' });
    if (DoctorId == null) return res.send({ Error: 'Doctor Id is missing' });
    if (AppointmentTime == null) return res.send({ Error: 'Time is missing' });

    Appointment.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Update appointment record */
app.put('/api/appointments/edit/:booking_id', (req, res) => {
    Appointment.findByIdAndUpdate(
        req.params.booking_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('Successfully updated patient\n', item);
                res.json(item);
            }
        }
    );
});

app.get('/api/doctorpref/', (req, res) => {
    DoctorPreference.find({}).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

app.get('/api/doctorpref/clinic/:ClinicId', (req, res) => {
    DoctorPreference.find({ ClinicId: req.params.ClinicId }).exec(
        (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(item);
                res.send(item);
            }
        }
    );
});

app.get('/api/doctorpref/doctor/:DoctorId', (req, res) => {
    DoctorPreference.find({ DoctorId: req.params.DoctorId }).exec(
        (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(item);
                res.send(item);
            }
        }
    );
});

app.post('/api/doctorpref', (req, res) => {
    const ClinicId = req.body.ClinicId;
    const DoctorId = req.body.DoctorId;
    const MeetingDuration = req.body.MeetingDuration;
    const Availability = req.body.Availability;
    const Status = req.body.Status;
    const Details = req.body.Details;

    // Check if doctor is already present
    // DoctorPreference.find({ DoctorId: DoctorId }).exec((err, item) => {
    //     if (err) {
    //         console.log(err);
    //         return res.json(err);
    //     } else if (item.size()) {
    //         const error = 'Doctor already present in preference db!';
    //         console.log(error);
    //         return res.send(error);
    //     }
    // });

    const obj = new DoctorPreference({
        ClinicId,
        DoctorId,
        MeetingDuration,
        Availability,
        Status,
        Details,
    });

    DoctorPreference.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Update Doctor preference record */
app.put('/api/doctorpref/edit/:doctor_id', (req, res) => {
    DoctorPreference.findByIdAndUpdate(
        req.params.doctor_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('Successfully updated doctor preferences\n', item);
                res.json(item);
            }
        }
    );
});

/** Delete Doctor preference record */
app.delete('/api/doctorpref/delete/:doctor_id', (req, res) => {
    DoctorPreference.findByIdAndDelete(
        req.params.doctor_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('Successfully deeted doctor preferences\n', item);
                res.json(item);
            }
        }
    );
});

module.exports = app;
