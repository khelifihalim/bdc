 import React, { useState } from 'react';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import { useAuth } from '../context/AuthContext';
 import { Container, Form, Button } from 'react-bootstrap';

 const LoginPage = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const { setAuth } = useAuth();

   const handleSubmit = async (e) => {
     e.preventDefault();
     const { data } = await axios.post(url + '/api/auth/login', { email, password });
     setAuth(data.token);
     navigate('/dashboard');
   };

   return (
     <Container className="mt-5 mb-5">
       <h2 className='text-center' >Login</h2>
       <h4 className='text-center' >Acces Uniquement pour le Dentiste</h4>
       <Form onSubmit={handleSubmit} >
         <Form.Group className="mb-3">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </Form.Group>
         <Form.Group className="mb-3">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </Form.Group>
         <Button type="submit" variant="primary">Login</Button>
       </Form>
     </Container>
   );
 };

 export default LoginPage;


