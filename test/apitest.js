let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.use(chaiHttp);

describe('Appointment', () => {
    describe('/GET Default route', () => {
        it('should GET a message', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/GET all appointment', () => {
        it('should GET all the appointments', (done) => {
            chai.request(server)
                .get('/api/appointments')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/GET/appointments/patient/{id}', () => {
        it('should GET all appointment for patient 1', (done) => {
            chai.request(server)
                .get('/api/appointments/patient/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/GET/appointments/doctor/{id}', () => {
        it('should GET all appointment for doctor 1', (done) => {
            chai.request(server)
                .get('/api/appointments/doctor/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/POST/appointment', () => {
        it('should schedule a new appointment', (done) => {
            chai.request(server)
                .post('/api/bookappointment')
                .send({
                    AppointmentTime: new Date(),
                    ClinicId: 1,
                    DoctorId: 1,
                    PatientId: 1,
                    Status: 'Booked',
                    Details: null,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('_id');
                    done();
                });
        });
    });
});

describe('Doctor Preference', () => {
    describe('/GET all preferences', () => {
        it('should GET all the preferences', (done) => {
            chai.request(server)
                .get('/api/doctorpref/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/POST/preference', () => {
        it('should create a new preference', (done) => {
            chai.request(server)
                .post('/api/doctorpref')
                .send({
                    ClinicId: 1,
                    DoctorId: 1,
                    MeetingDuration: 75,
                    Availability: [
                        ['1999-12-31T18:30:00.000Z'],
                        ['1999-12-31T18:30:00.000Z'],
                        ['1999-12-31T23:30:00.000Z'],
                        ['2000-01-01T02:00:00.000Z'],
                        ['2000-01-01T07:00:00.000Z'],
                        ['2000-01-01T12:00:00.000Z'],
                        ['2000-01-01T17:00:00.000Z'],
                    ],
                    Status: 'Offline',
                    Details: {
                        Name: 'Test Doctor',
                    },
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('_id');
                    done();
                });
        });
    });
    describe('/api/doctorpref/doctor/1', () => {
        it('should GET all preferences of a doctor', (done) => {
            chai.request(server)
                .get('/api/appointments/patient/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});

describe('Doctor Timeslot', () => {
    describe('/GET available timeslot', () => {
        it('should GET available timeslot of a doctor', (done) => {
            chai.request(server)
                .get('/api/doctorslot/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
