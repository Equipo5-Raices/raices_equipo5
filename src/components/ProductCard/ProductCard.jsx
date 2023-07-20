import React, { useState, useEffect } from "react";

const ProductCard = () => {
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data["hydra:member"][0]))
      .catch((error) => console.log("error", error));
  }, []);

  if (!Product) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      key={product._id}
      className="d-flex justify-content-center align-items-center h-100"
    >
      <Container>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={product.image_url}
              style={{ width: "4rem", height: "auto" }}
            />
            <Card.Body>
              <Row>
                <Col xs={7} className="text-start">
                  <Card.Title style={{ fontSize: "1.5rem" }}>
                    {beer.name}
                  </Card.Title>
                </Col>
                <Col className="text-end">
                  <Card.Text
                    className="text-secondary m-0"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {product.price}
                  </Card.Text>
                  <Card.Text style={{ fontSize: ".7rem" }}>
                    <strong>{product.origin}</strong>
                  </Card.Text>
                </Col>
              </Row>
              <Col>
                <Card.Text
                  className="text-start py-2"
                  style={{
                    fontSize: ".9rem",
                    lineHeight: "1",
                    fontWeight: "600",
                  }}
                >
                  {product.description}
                </Card.Text>
                <Card.Text className="text-start" style={{ fontSize: ".8rem" }}>
                  {product.store}
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
