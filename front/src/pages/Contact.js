import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const backendUrl =  process.env.REACT_APP_BACKEND_URL
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi des données au backend (remplacer cette partie par votre code de gestion des requêtes)
      await axios.post(`${backendUrl}/api/contact`, {
        name,
        phone,
        subject,
        message,
      });
      alert("message booked successfully!");
      // Réinitialiser le formulaire après la soumission
      setName("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <Container className="mt-5 contact-page">
      <h2 className="text-center mb-4">Contactez-nous</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez votre téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le sujet (optionnel)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mb-4">
          {/* Intégration de Google Maps ici */}
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.0356511890691!2d-0.5618168952320076!3d35.70251918075965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e6316f2b7c757%3A0x9cd01152e048fde!2sBabylone%20dental!5e1!3m2!1sfr!2sdz!4v1721228651748!5m2!1sfr!2sdz"

              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

<iframe
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
