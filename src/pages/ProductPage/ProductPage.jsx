import React from 'react';
import ProductCard from "../../components/ProductCard/ProductCard"; 
import SimilarProduct from '../../components/SimilarProduct/SimilarProduct';
export const ProductPage = () => {
  return (
    <div>
      <ProductCard />
      <SimilarProduct />
    </div>
  );
};
export  {ProductPage};