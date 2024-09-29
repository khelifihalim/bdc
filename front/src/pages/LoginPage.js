 import React, { useState } from 'react';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import { useAuth } from '../context/AuthContext';
 import { Container, Form, Button } from 'react-bootstrap';

 const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const { setAuth } = useAuth();

   const handleSubmit = async (e) => {
     e.preventDefault();
     const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
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

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Assurez-vous d'importer le fichier CSS

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/login', { email, password });
//       if (res.data.success) {
//         localStorage.setItem('authToken', res.data.token);
//         navigate('/dashboard');
//       } else {
//         setError(res.data.message);
//       }
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

