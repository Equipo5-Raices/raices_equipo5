import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./ProductCard.css";

import Aceite from "../../assets/aceite.jpeg";

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        let options = {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };
        const res = await fetch("http://localhost:3000/products/2", options);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    getProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      key={product._id}
      className="d-flex justify-content-center align-items-center h-100 card-container"
    >
      <Container>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={Aceite}
              alt="Aceite de oliva"
              className="card-img-top"
            />
            <Card.Body>
              <Row>
                <Col xs={7} className="text-start">
                  <Card.Title className="card-title">
                    {product.name}
                  </Card.Title>
                </Col>
                <Col className="text-end info-container">
                  <Card.Text className="text-secondary m-0 card-text">
                    {product.price}
                  </Card.Text>
                  <Card.Text className="card-text small-text">
                    <strong>{product.origin}</strong>
                  </Card.Text>
                  <Card.Text className="card-text small-text store">
                    {product.store}
                  </Card.Text>
                </Col>
              </Row>
              <Col>
                <Card.Text className="text-start py-2 card-text product-description">
                  {product.description}
                </Card.Text>
              </Col>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ProductCard;
