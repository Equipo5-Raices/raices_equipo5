import React from 'react';
import styles from './SimilarProduct.module.css';
import sidra from '../../assets/PhotoBox/sidra.png';
import pulpo from '../../assets/PhotoBox/pulpo.png';
import cecina from '../../assets/PhotoBox/cecina.png';
import paloSanto from '../../assets/PhotoBox/palo-santo.png';

function SimilarProduct() {
  return ( 
    <div>
      <h4>También te podría interesar...</h4>
      
      <div className={styles.caja}>
        <div className={styles.photoBox}>
          <img src={sidra} alt="sidra" />
          <p>Sidra</p>
        </div>
        

        <div className={styles.photoBox}>
          <img src={pulpo} alt="pulpo" />
          <p>Pulpo</p>
        </div>
        

        <div className={styles.photoBox}>
          <img src={cecina} alt="cecina" />
          <p>Cecina</p>
        </div>
        

        <div className={styles.photoBox}>
          <img src={paloSanto} alt="palo-santo" />
          <p>PaloSanto</p>
        </div>
        
      </div>
    </div>
   
  );
}

export default SimilarProduct;
