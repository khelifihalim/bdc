import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'

const RegisterPage = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${backendUrl}/api/auth/register`, { username, email, password });
    navigate('/login');
  };

  return (
    <Container className="mt-5 login-container">
      <h2 className='text-center'>Register</h2>
      <Form onSubmit={handleSubmit} className='login-form'>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
