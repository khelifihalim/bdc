


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import "./dashboard.css";
import { format } from 'date-fns';
//import AppointmentCard from '../components/AppointmentCard';

const DashboardPage = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  

  useEffect(() => {

    //fetch appointments************************************************
    const fetchAppointments = async () => {
      const { data } = await axios.get(
       `${backendUrl}/api/appointments`
      );
      setAppointments(data);
    };


    //fetch contacts messages*******************************************
    const fetchContacts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/contact`);
        setContacts(data);
      } catch (err) {
        setError("Error fetching contacts");
      }
    };
    fetchAppointments();
    fetchContacts();
    
  }, []);

  

  const totalAppointments = appointments.length;

  const handleAppointmentClick = (id) => {
    if (!selectedAppointments.includes(id)) {
      setSelectedAppointments([...selectedAppointments, id]);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/appointments/${id}`);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (err) {
      setError("Error deleting appointment");
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/contact/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (err) {
      setError("Error deleting contact");
    }
  };
  
  

  return (
    <Container className="mt-5">
      <h2>Dashboard</h2>
      {error && <p className="text-danger">{error}</p>}
      <section className="mt-5">
        <h3 className="mb-5">Nombre de Rendez-vous: {totalAppointments}</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nom complet</th>
              <th>Téléphone</th>
              <th>Date</th>
              <th>Heur</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                style={{
                  backgroundColor: selectedAppointments.includes(
                    appointment._id
                  )
                    ? "red"
                    : "inherit",
                  color: selectedAppointments.includes(appointment._id)
                    ? "white"
                    : "black",
                  cursor: "pointer",
                }}
                onClick={() => handleAppointmentClick(appointment._id)}
              >
                <td>{appointment.name}</td>
                <td>{appointment.phoneNumber}</td>
                <td>{format(new Date(appointment.date), 'yyyy-MM-dd')}</td>
              <td>{format(new Date(`1970-01-01T${appointment.time}Z`), 'HH:mm')}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAppointment(appointment._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="mt-5">
        <h2 className="mt-5">Contact Messages</h2>
        {/* <p>Total Contacts: {totalContacts}</p> */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.subject}</td>
                <td className="message-cell">{contact.message}</td>
                <td>{new Date(contact.date).toLocaleString()}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteContact(contact._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      
    </Container>
  );
};

export default DashboardPage;

/* 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import "./dashboard.css";
import { format } from 'date-fns';
//import AppointmentCard from '../components/AppointmentCard';

const DashboardPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  

  useEffect(() => {

    //fetch appointments************************************************
    const fetchAppointments = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/appointments"
      );
      setAppointments(data);
    };


    //fetch contacts messages*******************************************
    const fetchContacts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/contact");
        setContacts(data);
      } catch (err) {
        setError("Error fetching contacts");
      }
    };
    fetchAppointments();
    fetchContacts();
    
  }, []);

  

  const totalAppointments = appointments.length;

  const handleAppointmentClick = (id) => {
    if (!selectedAppointments.includes(id)) {
      setSelectedAppointments([...selectedAppointments, id]);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (err) {
      setError("Error deleting appointment");
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (err) {
      setError("Error deleting contact");
    }
  };
  
  

  return (
    <Container className="mt-5">
      <h2>Dashboard</h2>
      {error && <p className="text-danger">{error}</p>}
      <section className="mt-5">
        <h3 className="mb-5">Nombre de Rendez-vous: {totalAppointments}</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>phoneNumber</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                style={{
                  backgroundColor: selectedAppointments.includes(
                    appointment._id
                  )
                    ? "red"
                    : "inherit",
                  color: selectedAppointments.includes(appointment._id)
                    ? "white"
                    : "black",
                  cursor: "pointer",
                }}
                onClick={() => handleAppointmentClick(appointment._id)}
              >
                <td>{appointment.name}</td>
                <td>{appointment.phoneNumber}</td>
                <td>{format(new Date(appointment.date), 'yyyy-MM-dd')}</td>
              <td>{format(new Date(`1970-01-01T${appointment.time}Z`), 'HH:mm')}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAppointment(appointment._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="mt-5">
        <h2 className="mt-5">Contact Messages</h2>
        {/* <p>Total Contacts: {totalContacts}</p> */ /*}/*
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.subject}</td>
                <td className="message-cell">{contact.message}</td>
                <td>{new Date(contact.date).toLocaleString()}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteContact(contact._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      
    </Container>
  );
};

export default DashboardPage;

*/
