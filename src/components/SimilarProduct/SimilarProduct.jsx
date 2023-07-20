import React from 'react';
import styles from './SimilarProduct.css';
import sidra from '../../assets/PhotoBox/sidra.png'; 

function SimilarProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.photoBox}>
        <img src={sidra} alt="sidra" />
      </div>
      <p>Sidra</p>
    </div>
  );
}

export default SimilarProduct;
