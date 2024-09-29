import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import '../navBar.css'
import logoDental from '../assets/logoDental.png'

const Navibar = () => {
  const [expanded, setExpanded] = useState(false);
  const { auth, setAuth } = useAuth();
 

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="light"
      variant="light"
      className="custom-navbar fixed-top"
      onToggle={() => setExpanded(expanded ? false : "expanded")}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoDental}
            height="80"
            className="d-inline-block align-top"
            alt="*"
          />
         Babylone-Dental
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Accueil
            </Nav.Link>
            {!auth ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/appointments"
                  onClick={() => setExpanded(false)}
                >
                  Prendre Rendez-vous
                </Nav.Link>
                
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => setExpanded(false)}
                >
                  Contact
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={() => setExpanded(false)}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  onClick={() => setExpanded(false)}
                >
                  Register
                </Nav.Link> */}
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/dashboard"
                  onClick={() => setExpanded(false)}
                >
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/dashboard"
                  onClick={() => setExpanded(false)}
                >
                  Dashboard
                </Button>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     setAuth(null);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Appointify</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             {!auth ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li>

//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
