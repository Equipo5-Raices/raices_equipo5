import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./ProductCard.module.css";

import Aceite from "../../assets/aceite.jpeg";
let url = window.location;
let idd=url.pathname.slice(-1);

const ProductCard = () => {
  
  const [products, setProducts] = useState([]);
    

  
  
  
    useEffect(() => {
      fetch(`https://127.0.0.1:8000/api/products/${idd}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        
        .catch(error => console.log('error', error));
    }, [products]);
 
  return (
    <>
  

    
    <Card key={products.id} className={`${styles["card-container"]}`}>
      <Container>
        
        <Card.Img
          variant="top"
          src={Aceite}
          alt="Aceite de oliva"
          className={styles["card-img-top"]}
        />

        <div className={styles["card-title-container"]}>
          <Card.Title className={styles["card-title"]}>
            {products.name}
          </Card.Title>
        </div>

        <div className={styles["body"]}>
          <Card.Text
            className={`${styles["text-start"]} ${styles["py-2"]} ${styles["card-text"]} ${styles["product-description"]}`}
          >
            {products.description}
          </Card.Text>

          <Card.Text className={`${styles["card-text"]}`}>
            {products.price}€
          </Card.Text>
          <Card.Text className={`{styles["small-text"]}`}>
            <strong>{products.store}</strong>
          </Card.Text>
          <Card.Text className={`${styles["small-text"]} `}>
            {products.origin}
          </Card.Text>
        </div>
      </Container>
    </Card>
     
    </>
  );
};

export default ProductCard;