
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import "./ProductCardHome.css";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import React, { useState, useEffect } from 'react';


function ProductCardHome() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            // Fetch the list of products from your API
            let res = await fetch("http://localhost:3000/products");
            let json = await res.json();
            setProducts(json);
          } catch (err) {
            // Handle errors if any
            console.error("Error fetching products:", err);
          }
        }

        fetchProducts();
    }, []);

    return(
        <div>
            {products.map((product) => (
                <div className='productList'>
                    <div key={product.id} className='productCard'>
                        <img src="public/aceiteOlive-img.jpg" alt="product-img" className='productImage' />
                    </div>

                    <div className='productCard_content'>

                        <h3 className='productName'>{product.name}</h3>
                    
                        <div className='origin-details'>
                            <div className='store'>
                                <p>Proveniencia</p>
                                <span className="store">{product.store}</span>
                            </div>

                            <div className='origin'>
                                <p>Orígen</p>
                                <span className="origin">{product.origin}</span>
                            </div>
                        </div>

                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="details-shop">   
                        <AiFillHeart className='heart'/>
                        <div className="buy">
                            <span>Comprar</span> 
                        <FaShoppingCart className='cart' />
                        </div> 

                        <div className="productPrice">{product.price}</div>               
                    </div>
                </div>
            ))}
        </div>
    )



}

export { ProductCardHome };