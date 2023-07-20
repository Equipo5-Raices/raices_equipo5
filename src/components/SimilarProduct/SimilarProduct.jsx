import React from 'react';
import styles from './SimilarProduct.css';
import sidra from '../../assets/PhotoBox/sidra.png';
import pulpo from '../../assets/PhotoBox/pulpo.png';
import cecina from '../../assets/PhotoBox/cecina.png';
import paloSanto from '../../assets/PhotoBox/palo-santo.png';

function SimilarProduct() {
  return (
    <div >
      <div className={styles.container}>
        <div className={styles.photoBox}>
          <img src={sidra} alt="sidra" />
        </div>
        <p>Sidra</p>

        <div className="photoBox">
          <img src={pulpo} alt="pulpo" />
        </div>
        <p>pulpo</p>

        <div className="photoBox">
          <img src={cecina} alt="cecina" />
        </div>
        <p>cecina</p>

        <div className="photoBox">
          <img src={paloSanto} alt="palo-santo" />
        </div>
        <p>palo santo</p>
      </div>
    </div>
   
  );
}

export default SimilarProduct;
