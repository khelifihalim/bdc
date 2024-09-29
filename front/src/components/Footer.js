import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer foot bg-dark text-white text-center text-lg-start">
      <Container className="mt-1">
        <Row>
          <Col lg={6} md={8} className="mb-2 mb-md-0">
            <h5 className="text-uppercase">Cabinet Dentaire</h5>
            <p>
              Bienvenue a Babylone Dental Clinic. Nous offrons une variété de
              services pour vous aider à maintenir une bonne santé
              bucco-dentaire.
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Liens utiles</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/appointments" className="text-white">
                  Prendre Rendez-vous
                </a>
              </li>

              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <span className="text-white">
                  Adresse : 123 Rue Principale, Ville
                </span>
              </li>
              <li>
                <span className="text-white">Téléphone Oran: 0557573293 </span>
              </li>
              <li>
                <span className="text-white">
                  Téléphone Cherchell: 0557573293{" "}
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
