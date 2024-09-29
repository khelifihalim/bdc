import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const AppointmentsPage = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('url + /api/appointments', { name, phoneNumber, date, time });
      alert('Appointment booked successfully!');
      // Réinitialiser le formulaire après la soumission
      setName('');
      setPhoneNumber('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
    setIsLoading(false);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour < 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }
    return times;
  };

  return (
    <Container className="mt-5">
      <h2>Book an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control as="select" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="" disabled>Select Time</option>
            {generateTimeOptions()}
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </Button>
      </Form>
    </Container>
  );
};

export default AppointmentsPage;

