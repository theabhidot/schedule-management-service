# Project: Schedule Management APIs

# 📁 Collection: Doctor Preference

## End-point: doctorpref

Routes to create a preference.

### Method: POST

> ```
> /doctorpref
> ```

### Body (**raw**)

```json
{
    "ClinicId": 1,
    "DoctorId": 1,
    "MeetingDuration": 45,
    "Availability": [
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T23:30:00.000Z"],
        ["2000-01-01T02:00:00.000Z"],
        ["2000-01-01T07:00:00.000Z"],
        ["2000-01-01T12:00:00.000Z"],
        ["2000-01-01T17:00:00.000Z"]
    ],
    "Status": "Offline",
    "Details": {
        "Name": "Test Doctor",
        "Mobile": "9876123456",
        "Specialty": "ENT Specialty"
    }
}
```

### Response: 200

```json
{
    "_id": "63c8072dfff0371da45e3d70",
    "ClinicId": 1,
    "DoctorId": 1,
    "MeetingDuration": 75,
    "Availability": [
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T23:30:00.000Z"],
        ["2000-01-01T02:00:00.000Z"],
        ["2000-01-01T07:00:00.000Z"],
        ["2000-01-01T12:00:00.000Z"],
        ["2000-01-01T17:00:00.000Z"]
    ],
    "Status": "Offline",
    "Details": {
        "Name": "Test Doctor"
    },
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: doctorpref

Routes to return all preferences.

### Method: GET

> ```
> /doctorpref
> ```

### Body (**raw**)

```json

```

### Response: 200

```json
[
    {
        "_id": "63c8072dfff0371da45e3d70",
        "ClinicId": 1,
        "DoctorId": 1,
        "MeetingDuration": 45,
        "Availability": [
            ["1999-12-31T18:30:00.000Z"],
            ["1999-12-31T18:30:00.000Z"],
            ["1999-12-31T23:30:00.000Z"],
            ["2000-01-01T02:00:00.000Z"],
            ["2000-01-01T07:00:00.000Z"],
            ["2000-01-01T12:00:00.000Z"],
            ["2000-01-01T17:00:00.000Z"]
        ],
        "Status": "Offline",
        "Details": {
            "Name": "Test Doctor",
            "Mobile": "9876123456",
            "Specialty": "ENT Specialty"
        },
        "__v": 0
    },
    {
        "_id": "63ce50e0101fb7bcb35803f5",
        "DoctorId": 2,
        "Availability": [
            [
                "1999-12-31T18:30:00.000Z",
                "1999-12-31T22:30:00.000Z",
                "2000-01-01T02:30:00.000Z",
                "2000-01-01T06:30:00.000Z",
                "2000-01-01T10:30:00.000Z",
                "2000-01-01T14:30:00.000Z"
            ],
            [
                "1999-12-31T20:30:00.000Z",
                "2000-01-01T00:30:00.000Z",
                "2000-01-01T04:30:00.000Z",
                "2000-01-01T08:30:00.000Z",
                "2000-01-01T12:30:00.000Z",
                "2000-01-01T16:30:00.000Z"
            ],
            [],
            [],
            [],
            [],
            []
        ],
        "ClinicId": 2,
        "Details": {
            "Name": "Mihir ENT"
        },
        "MeetingDuration": 120,
        "Status": "Offline",
        "__v": 0
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: doctorpref/clinic

Routes to return all preferences of a clinic.

### Method: GET

> ```
> /doctorpref/clinic/2
> ```

### Body (**raw**)

```json

```

### Response: 200

```json
[
    {
        "_id": "63ce50e0101fb7bcb35803f5",
        "DoctorId": 2,
        "Availability": [
            [
                "1999-12-31T18:30:00.000Z",
                "1999-12-31T22:30:00.000Z",
                "2000-01-01T02:30:00.000Z",
                "2000-01-01T06:30:00.000Z",
                "2000-01-01T10:30:00.000Z",
                "2000-01-01T14:30:00.000Z"
            ],
            [
                "1999-12-31T20:30:00.000Z",
                "2000-01-01T00:30:00.000Z",
                "2000-01-01T04:30:00.000Z",
                "2000-01-01T08:30:00.000Z",
                "2000-01-01T12:30:00.000Z",
                "2000-01-01T16:30:00.000Z"
            ],
            [],
            [],
            [],
            [],
            []
        ],
        "ClinicId": 2,
        "Details": {
            "Name": "Mihir ENT"
        },
        "MeetingDuration": 120,
        "Status": "Offline",
        "__v": 0
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: doctorpref/doctor

Routes to return preference of a doctor.

### Method: GET

> ```
> /doctorpref/doctor/1
> ```

### Body (**raw**)

```json

```

### Response: 200

```json
{
    "_id": "63c8072dfff0371da45e3d70",
    "ClinicId": 1,
    "DoctorId": 1,
    "MeetingDuration": 45,
    "Availability": [
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T23:30:00.000Z"],
        ["2000-01-01T02:00:00.000Z"],
        ["2000-01-01T07:00:00.000Z"],
        ["2000-01-01T12:00:00.000Z"],
        ["2000-01-01T17:00:00.000Z"]
    ],
    "Status": "Offline",
    "Details": {
        "Name": "Test Doctor",
        "Mobile": "9876123456",
        "Specialty": "ENT Specialty"
    },
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: doctorpref/edit

Routes to edit a preference.

### Method: PUT

> ```
> /doctorpref/edit/63c8072dfff0371da45e3d70
> ```

### Body (**raw**)

```json
{
    "ClinicId": 2,
    "DoctorId": 1,
    "MeetingDuration": 30,
    "Availability": [
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:02:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ],
        [
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T07:00:00.000Z",
            "2000-01-01T18:00:00.000Z",
            "2000-01-01T18:30:00.000Z",
            "2000-01-01T19:00:00.000Z",
            "2000-01-01T19:45:00.000Z"
        ]
    ],
    "Status": "Offline",
    "Details": {
        "Name": "Pawan",
        "Mobile": "8210223091",
        "Specialty": "ENT"
    },
    "__v": 0
}
```

### Response: 200

```json
{
    "_id": "63c8072dfff0371da45e3d70",
    "ClinicId": 1,
    "DoctorId": 1,
    "MeetingDuration": 45,
    "Availability": [
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T18:30:00.000Z"],
        ["1999-12-31T23:30:00.000Z"],
        ["2000-01-01T02:00:00.000Z"],
        ["2000-01-01T07:00:00.000Z"],
        ["2000-01-01T12:00:00.000Z"],
        ["2000-01-01T17:00:00.000Z"]
    ],
    "Status": "Offline",
    "Details": {
        "Name": "Test Doctor",
        "Mobile": "9876123456",
        "Specialty": "ENT Specialty"
    },
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: doctorpref/delete

Routes to delete a preference.

### Method: DELETE

> ```
> /doctorpref/delete/63ce50e0101fb7bcb35803f5
> ```

### Body (**raw**)

```json

```

### Response: 200

```json
{
    "_id": "63ce50e0101fb7bcb35803f5",
    "DoctorId": 2,
    "Availability": [
        [
            "1999-12-31T18:30:00.000Z",
            "1999-12-31T22:30:00.000Z",
            "2000-01-01T02:30:00.000Z",
            "2000-01-01T06:30:00.000Z",
            "2000-01-01T10:30:00.000Z",
            "2000-01-01T14:30:00.000Z"
        ],
        [
            "1999-12-31T20:30:00.000Z",
            "2000-01-01T00:30:00.000Z",
            "2000-01-01T04:30:00.000Z",
            "2000-01-01T08:30:00.000Z",
            "2000-01-01T12:30:00.000Z",
            "2000-01-01T16:30:00.000Z"
        ],
        [],
        [],
        [],
        [],
        []
    ],
    "ClinicId": 2,
    "Details": {
        "Name": "Mihir ENT"
    },
    "MeetingDuration": 120,
    "Status": "Offline",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Appointments

## End-point: bookappointment

Route to book an appointment.

### Method: POST

> ```
> /bookappointment
> ```

### Body (**raw**)

```json
{
    "AppointmentTime": "1999-12-31T18:30:00.000Z",
    "ClinicId": 15,
    "DoctorId": 10,
    "PatientId": 20,
    "Details": {
        "Name": "Pawan",
        "Mobile": "8210223091"
    }
}
```

### Response: 200

```json
{
    "AppointmentTime": "1999-12-31T18:30:00.000Z",
    "ClinicId": 15,
    "DoctorId": 10,
    "PatientId": 20,
    "Status": "Booked",
    "Details": {
        "Name": "Pawan",
        "Mobile": "8210223091"
    },
    "_id": "63db658c2f6aa9a2d70b42d1",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: appointments

Route to return all appointments.

### Method: GET

> ```
> /appointments
> ```

### Body (**raw**)

```json

```

### Response: 200

```json
[
    {
        "_id": "63ce61dbf50a62c2f4761c97",
        "AppointmentTime": "2023-01-22T18:30:00.000Z",
        "ClinicId": null,
        "DoctorId": 1,
        "PatientId": 2,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63cec7f3ccbb44f75c08a67f",
        "AppointmentTime": "2023-01-22T21:00:00.000Z",
        "ClinicId": null,
        "DoctorId": 1,
        "PatientId": 2,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5d73fe276bcb6ff343e7",
        "AppointmentTime": "2023-02-02T06:51:31.798Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e0aa8afdd811eba1250",
        "AppointmentTime": "2023-02-02T06:54:02.790Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e2c3b2998c4454179d3",
        "AppointmentTime": "2023-02-02T06:54:36.430Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e4db1b0f903c65d70f1",
        "AppointmentTime": "2023-02-02T06:55:09.061Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e939d4f4159880f46da",
        "AppointmentTime": "2023-02-02T06:56:19.850Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db601997360c6b66c31247",
        "AppointmentTime": "2023-02-02T07:02:49.179Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db607a999186b609e77de3",
        "AppointmentTime": "2023-02-02T07:04:26.688Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db64db2f6aa9a2d70b42c9",
        "AppointmentTime": "1999-12-31T18:30:00.000Z",
        "ClinicId": 15,
        "DoctorId": 10,
        "PatientId": 20,
        "Status": "Booked",
        "Details": {
            "Name": "Pawan",
            "Mobile": "8210223091"
        },
        "__v": 0
    },
    {
        "_id": "63db658c2f6aa9a2d70b42d1",
        "AppointmentTime": "1999-12-31T18:30:00.000Z",
        "ClinicId": 15,
        "DoctorId": 10,
        "PatientId": 20,
        "Status": "Booked",
        "Details": {
            "Name": "Pawan",
            "Mobile": "8210223091"
        },
        "__v": 0
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: appointments/patient

Route to return all appointments for {patientid}.

### Method: GET

> ```
> /appointments/patient/1
> ```

### Response: 200

```json
[
    {
        "_id": "63db5d73fe276bcb6ff343e7",
        "AppointmentTime": "2023-02-02T06:51:31.798Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e0aa8afdd811eba1250",
        "AppointmentTime": "2023-02-02T06:54:02.790Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e2c3b2998c4454179d3",
        "AppointmentTime": "2023-02-02T06:54:36.430Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e4db1b0f903c65d70f1",
        "AppointmentTime": "2023-02-02T06:55:09.061Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e939d4f4159880f46da",
        "AppointmentTime": "2023-02-02T06:56:19.850Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db601997360c6b66c31247",
        "AppointmentTime": "2023-02-02T07:02:49.179Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db607a999186b609e77de3",
        "AppointmentTime": "2023-02-02T07:04:26.688Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: appointments/doctor

Route to return all appointments for {doctorid}.

### Method: GET

> ```
> /appointments/doctor/1
> ```

### Response: 200

```json
[
    {
        "_id": "63ce61dbf50a62c2f4761c97",
        "AppointmentTime": "2023-01-22T18:30:00.000Z",
        "ClinicId": null,
        "DoctorId": 1,
        "PatientId": 2,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63cec7f3ccbb44f75c08a67f",
        "AppointmentTime": "2023-01-22T21:00:00.000Z",
        "ClinicId": null,
        "DoctorId": 1,
        "PatientId": 2,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5d73fe276bcb6ff343e7",
        "AppointmentTime": "2023-02-02T06:51:31.798Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e0aa8afdd811eba1250",
        "AppointmentTime": "2023-02-02T06:54:02.790Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e2c3b2998c4454179d3",
        "AppointmentTime": "2023-02-02T06:54:36.430Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e4db1b0f903c65d70f1",
        "AppointmentTime": "2023-02-02T06:55:09.061Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db5e939d4f4159880f46da",
        "AppointmentTime": "2023-02-02T06:56:19.850Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db601997360c6b66c31247",
        "AppointmentTime": "2023-02-02T07:02:49.179Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    },
    {
        "_id": "63db607a999186b609e77de3",
        "AppointmentTime": "2023-02-02T07:04:26.688Z",
        "ClinicId": 1,
        "DoctorId": 1,
        "PatientId": 1,
        "Status": "Booked",
        "Details": null,
        "__v": 0
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: appointments/edit

Update appointment record with id = {booking_id}.

### Method: PUT

> ```
> /appointments/edit/63ce61dbf50a62c2f4761c97
> ```

### Body (**raw**)

```json
{
    "Status": "Completed"
}
```

### Response: 200

```json
{
    "_id": "63ce61dbf50a62c2f4761c97",
    "AppointmentTime": "2023-01-22T18:30:00.000Z",
    "ClinicId": null,
    "DoctorId": 1,
    "PatientId": 2,
    "Status": "Completed",
    "Details": null,
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Timeslot Creation

## End-point: Timeslot

Route to return available timeslots for a doctor.

### Method: GET

> ```
> /doctorslot/1
> ```

### Response: 200

```json
[
    [
        "2023-02-05T18:30:00.000Z",
        "2023-02-05T19:00:00.000Z",
        "2023-02-05T19:45:00.000Z",
        "2023-02-06T06:30:00.000Z",
        "2023-02-06T07:00:00.000Z",
        "2023-02-06T18:00:00.000Z"
    ],
    [
        "2023-02-06T18:30:00.000Z",
        "2023-02-06T19:00:00.000Z",
        "2023-02-06T19:45:00.000Z",
        "2023-02-07T06:30:00.000Z",
        "2023-02-07T07:02:00.000Z",
        "2023-02-07T18:00:00.000Z"
    ],
    [
        "2023-02-07T18:30:00.000Z",
        "2023-02-07T19:00:00.000Z",
        "2023-02-07T19:45:00.000Z",
        "2023-02-08T06:30:00.000Z",
        "2023-02-08T07:00:00.000Z",
        "2023-02-08T18:00:00.000Z"
    ],
    [
        "2023-02-01T18:30:00.000Z",
        "2023-02-01T19:00:00.000Z",
        "2023-02-01T19:45:00.000Z",
        "2023-02-02T18:00:00.000Z"
    ],
    [
        "2023-02-02T18:30:00.000Z",
        "2023-02-02T19:00:00.000Z",
        "2023-02-02T19:45:00.000Z",
        "2023-02-03T06:30:00.000Z",
        "2023-02-03T07:00:00.000Z",
        "2023-02-03T18:00:00.000Z"
    ],
    [
        "2023-02-03T18:30:00.000Z",
        "2023-02-03T19:00:00.000Z",
        "2023-02-03T19:45:00.000Z",
        "2023-02-04T06:30:00.000Z",
        "2023-02-04T07:00:00.000Z",
        "2023-02-04T18:00:00.000Z"
    ],
    [
        "2023-02-04T18:30:00.000Z",
        "2023-02-04T19:00:00.000Z",
        "2023-02-04T19:45:00.000Z",
        "2023-02-05T06:30:00.000Z",
        "2023-02-05T07:00:00.000Z",
        "2023-02-05T18:00:00.000Z"
    ]
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
