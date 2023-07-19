import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

  // Falta llamar a la API: fetch, if.... Y definirlo abajo en el card

  return (
    <>
      {/* <HeroImage /> */}


      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="bootstrap">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text> 
                  This is a longer card with supporting text below as a natural.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
