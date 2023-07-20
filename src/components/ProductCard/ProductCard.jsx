import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./ProductCard.module.css";

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
    <Card key={product._id} className={`${styles["card-container"]}`}>
      <Container>
        
        <Card.Img
          variant="top"
          src={Aceite}
          alt="Aceite de oliva"
          className={styles["card-img-top"]}
        />

        <div className={styles["card-title-container"]}>
          <Card.Title className={styles["card-title"]}>
            {product.name}
          </Card.Title>
        </div>

        <div className={styles["body"]}>
          <Card.Text
            className={`${styles["text-start"]} ${styles["py-2"]} ${styles["card-text"]} ${styles["product-description"]}`}
          >
            {product.description}
          </Card.Text>

          <Card.Text className={`${styles["card-text"]}`}>
            {product.price}€
          </Card.Text>
          <Card.Text className={`{styles["small-text"]}`}>
            <strong>{product.store}</strong>
          </Card.Text>
          <Card.Text className={`${styles["small-text"]} `}>
            {product.origin}
          </Card.Text>
        </div>
      </Container>
    </Card>
  );
};

export default ProductCard;