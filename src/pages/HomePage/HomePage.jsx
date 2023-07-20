import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePage = () => {
  // Falta llamar a la API: fetch, if.... Y definirlo abajo en el card

  const cardStyle = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
  };

  const rowStyle = {
    backgroundColor: "#fff",
    isplay: "flex",
    justifyContent: "center",
  };

  const cardColStyle = {
    width: "45%"
  };

  return (
    <>
      {/* <HeroImage /> */}

      <Row xs={1} md={2} className="g-4" style={rowStyle}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} style={cardColStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <i class="bi bi-heart"></i>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
