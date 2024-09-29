const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to receive contact messages
router.post('/', async (req, res) => {
  const { name, phone, subject, message } = req.body;

  try {
    const newContact = new Contact({ name, phone, subject, message });
    await newContact.save();
    res.status(200).json({ message: 'Message received successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to retrieve contact messages for the dashboard
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

//delete a contact message
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

