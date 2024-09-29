// const express = require('express');
// const router = express.Router();
// const Appointment = require('../models/Appointment');

// router.post('/', async (req, res) => {
//   const { name,  phoneNumber, date, time } = req.body;
//   const appointment = new Appointment({ name, phoneNumber, date, time });
//   await appointment.save();
//   res.status(201).send(appointment);
// });

// router.get('/', async (req, res) => {
//   const appointments = await Appointment.find();
//   res.send(appointments);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ date: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new appointment
router.post('/', async (req, res) => {
  const { name, phoneNumber, date, time } = req.body;

  try {
    const newAppointment = new Appointment({ name, phoneNumber, date, time });
    await newAppointment.save();
    res.status(200).json({ message: 'Appointment created successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

//delet an appointment 
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

