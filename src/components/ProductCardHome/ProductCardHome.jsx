
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import "./ProductCardHome.css";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProductCardHome() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {

                const response = await fetch(`https://127.0.0.1:8000/api/products`);
                const data = await response.json();
                setProducts(data['hydra:member']);
            } catch (error) {
                console.log('Error al obtener los datos de usuarios aleatorios:', error);
            }

        };

        fetchRandomUsers();
    }, []);//si pongo en array vacio endpoint solo render


    return (
        <div className='product-container'>
            {products.map(Products => (
                <div className='productList'>
                    <Link to={`/products/${Products.id}`}>
                        <div key={Products.id} className='productCard'>
                            <img src="public/aceiteOlive-img.jpg" alt="product-img" className='productImage' />
                        </div>

                        <div className='productCard_content'>

                            <h3 className='productName'>{Products.name}</h3>

                            <div className='origin-details'>
                                <span>{Products.store}</span>

                                {/* <div className='origin'>
                                <p>Orígen</p>
                                <span className="origin">{product.origin}</span>
                            </div> */}
                            </div>

                            {/* <div className="description">
                            <p>{product.description}</p>
                        </div> */}
                        </div>
                        <div className="details-shop">
                            <AiFillHeart className='heart' />
                            <div className="buy">
                                <span>Comprar</span>
                                <FaShoppingCart className='cart' />
                            </div>

                            <div className="productPrice">{Products.price}€</div>
                        </div>
                     </Link>  
                </div>
            ))}
        </div>
    )



}

export { ProductCardHome };