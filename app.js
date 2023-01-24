const express = require('express');
const mongoose = require('mongoose');
const Appointment = require('./models/appointment');
const DoctorPreference = require('./models/doctorPreference');
const uri =
    'mongodb+srv://admin:admin@cluster0.cqvxfps.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
mongoose.set('strictQuery', true);

/** Connect to the MongoDB database. */
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

/** Home route. */
app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
});

/** Routes retated to Appointment between Patient and Doctor. */

/** Route to return all appointments. */
app.get('/api/appointments', function (req, res) {
    Appointment.find({}).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Route to return all appointments for {patientid} . */
app.get('/api/appointments/patient/:patientid', function (req, res) {
    Appointment.find({ PatientId: req.params.patientid }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Route to return all appointments between {patientid} and {doctorid}. */
app.get('/api/appointments/patient/:patientid/:doctorid', function (req, res) {
    Appointment.find({
        PatientId: req.params.patientid,
        DoctorId: req.params.doctorid,
    }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Route to return all appointments for {doctorid} . */
app.get('/api/appointments/doctor/:doctorid', function (req, res) {
    Appointment.find({ DoctorId: req.params.doctorid }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Route to return all appointments between {patientid} and {doctorid}. */
app.get('/api/appointments/doctor/:doctorid/:patientid', function (req, res) {
    Appointment.find({
        PatientId: req.params.patientid,
        DoctorId: req.params.doctorid,
    }).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Route to book an appointment. */
app.post('/api/bookappointment', (req, res) => {
    const AppointmentTime = req.body?.AppointmentTime;
    const PatientId = req.body?.PatientId;
    const DoctorId = req.body?.DoctorId;
    const ClinicId = req.body?.ClinicId;
    const Details = req.body?.Details;
    const Status = req.body?.Status ? req.body.Status : 'Booked';

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
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Update appointment record with id = {booking_id}. */
app.put('/api/appointments/edit/:booking_id', (req, res) => {
    Appointment.findByIdAndUpdate(
        req.params.booking_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json({ error: err });
            } else {
                console.log('Successfully updated appointment.', item);
                res.json(item);
            }
        }
    );
});

/** Delete Appointment with id = {booking_id}. */
app.delete('/api/appointments/delete/:id', (req, res) => {
    Appointment.findByIdAndDelete(req.params.id, (err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            let str = 'Successfully deleted appointment\n';
            console.log(str, item);
            res.json({ message: str });
        }
    });
});

/** Routes retated to preferences of a Doctor. */

/** Routes to return all preferences. */
app.get('/api/doctorpref/', (req, res) => {
    DoctorPreference.find({}).exec((err, item) => {
        if (err) {
            console.log(err);
            res.json({ error: err });
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

/** Routes to return all preferences of a doctor. */
app.get('/api/doctorpref/doctor/:DoctorId', (req, res) => {
    DoctorPreference.findOne({ DoctorId: req.params.DoctorId }).exec(
        (err, item) => {
            if (err) {
                console.log(err);
                res.json({ error: err });
            } else {
                console.log(item);
                res.json(item);
            }
        }
    );
});

/** Routes to return all preferences of doctors of some clinic. */
app.get('/api/doctorpref/clinic/:ClinicId', (req, res) => {
    DoctorPreference.find({ ClinicId: req.params.ClinicId }).exec(
        (err, item) => {
            if (err) {
                console.log(err);
                res.json({ error: err });
            } else {
                console.log(item);
                res.send(item);
            }
        }
    );
});

/** Routes to add or update preferences of a new doctor. */
app.post('/api/doctorpref', async (req, res) => {
    const ClinicId = req.body?.ClinicId;
    const DoctorId = req.body?.DoctorId;
    const MeetingDuration = req.body?.MeetingDuration;
    const Status = req.body?.Status || 'Offline';
    const Details = req.body?.Details;
    let Availability = req.body?.Availability;

    Availability?.forEach((i) => i.sort());

    Availability = Availability?.map((arr) =>
        arr.map((a) => {
            let d = new Date(a);
            d.setDate('2000-01-01');
            return a;
        })
    );

    const obj = {
        ClinicId,
        DoctorId,
        MeetingDuration,
        Availability,
        Status,
        Details,
    };

    try {
        res.json(
            await DoctorPreference.findOneAndUpdate({ DoctorId }, obj, {
                upsert: true,
            })
        );
    } catch (err) {
        res.json({ error: err });
    }
});

/** This route is redundant as the previous is being used to edit also.
 *  Route to update Doctor preference record.
 */
app.put('/api/doctorpref/edit/:doctor_id', (req, res) => {
    DoctorPreference.findByIdAndUpdate(
        req.params.doctor_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json({ error: err });
            } else {
                console.log('Successfully updated doctor preferences\n', item);
                res.json(item);
            }
        }
    );
});

/** Delete Doctor preference record. */
app.delete('/api/doctorpref/delete/:pref_id', (req, res) => {
    DoctorPreference.findByIdAndDelete(
        req.params.pref_id,
        req.body,
        (err, item) => {
            if (err) {
                console.log(err);
                res.json({ error: err });
            } else {
                console.log('Successfully deeted doctor preferences\n', item);
                res.json(item);
            }
        }
    );
});

/** Route to return available timeslots for a doctor. */
app.get('/api/doctorslot/:doctor_id', async (req, res) => {
    const docPref = await DoctorPreference.findOne({
        DoctorId: req.params.doctor_id,
    });
    const appointments = await Appointment.find({
        DoctorId: req.params.doctor_id,
    });
    const Availability = docPref?.Availability;
    const MeetingDuration = docPref?.MeetingDuration;
    var slots = [];
    if (Availability)
        Availability.forEach((daySlot, idx) => {
            let slot = [];
            daySlot.forEach((e) => {
                let exist = true;
                var d = new Date();
                e.setDate(d.getDate() + ((idx + 8 - d.getDay()) % 7));
                e.setMonth(d.getMonth());
                e.setFullYear(d.getFullYear());
                appointments.forEach((a) => {
                    // check if two segments are colliding
                    if (
                        Math.abs(a.AppointmentTime.valueOf() - e.valueOf()) <
                        MeetingDuration * 60 * 1000
                    ) {
                        exist = false;
                    }
                });
                if (exist) {
                    slot.push(e);
                }
            });
            slot.sort();
            slots.push(slot);
        });
    else {
        for (let i = 0; i < 7; i++) slots.push([]);
    }
    console.log(slots);
    res.send(slots);
});

module.exports = app;
