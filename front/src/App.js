import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Navbar.css";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
