import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import services from '../data/services';
import './CardStyle.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';


const Home = () => {
  const navigate = useNavigate()
  
  const handleNav = () => {
    navigate('/appointments')
  }

  const advice = [
    "Pour maintenir une bonne hygiène bucco-dentaire, brossez-vous les dents au moins deux fois par jour et utilisez du fil dentaire régulièrement.",
    "Évitez les boissons sucrées et les collations fréquentes pour prévenir les caries.",
    "Consultez votre dentiste au moins une fois par an pour un examen de routine.",
    "Utilisez un dentifrice au fluor pour renforcer l'émail de vos dents.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container className="mt-5 home-page">
      
      <section className="intro-section">
        <div className="intro-overlay"></div>
        <div className="intro-content">
          <h1 className="intro-title">Bienvenue a Babylone Dental Clinic</h1>
          <p className="intro-text">
            A <span className="intro-highlight">Babylone Dentale</span>, nous sommes passionnés par votre santé bucco-dentaire. 
            Notre équipe de professionnels expérimentés est dédiée à offrir des soins de qualité supérieure dans une ambiance chaleureuse et accueillante.
          </p>
          <p className="intro-text">
            Nous utilisons les dernières technologies et techniques pour vous garantir un sourire éclatant et en pleine santé. 
            Que vous ayez besoin d'un simple nettoyage, de soins dentaires complexes, ou de conseils pour maintenir une bonne hygiène buccale, 
            nous sommes là pour vous aider.
          </p>
          <p className="intro-text">
            Explorez nos services ci-dessous et découvrez comment nous pouvons améliorer votre santé bucco-dentaire. 
            Prenez rendez-vous dès aujourd'hui et faites l'expérience de soins dentaires exceptionnels.
          </p>
          <button className="appointment-btn" onClick={handleNav}>
            Prendre Rendez-vous
          </button>
        </div>
      </section>
      <h2 className="text-center mb-4">Nos Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card onClick={handleNav} className='card-services'>
              <Card.Img variant="top" src={service.image} className='card-img-top'/>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <section className="advice-section mt-5">
        <h2>Conseil du Jour</h2>
        <Slider {...settings}>
          {advice.map((tip, index) => (
            <div key={index}>
              <p>{tip}</p>
            </div>
          ))}
        </Slider>
        <Button className="btn" onClick={handleNav}>Prenez Rendez-vous</Button>
      </section>
      
    </Container>
  );
};

export default Home;
