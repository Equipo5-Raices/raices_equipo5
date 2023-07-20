
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import "./ProductCardHome.css";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';



function ProductCardHome(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src="public/aceiteOlive-img.jpg" alt="product-img" className='productImage' />
            </div>

            <div className='productCard_content'>

                <h3 className='productName'>Aceite de Oliva Virgen Extra Premium</h3>
            
                <div className='origin-details'>
                    <div className='store'>
                        <p>Proveniencia</p>
                        <span className="store">Olivares de Jaén</span>
                    </div>

                    <div className='origin'>
                        <p>Orígen</p>
                        <span className="origin">Olivares de Jaén</span>
                    </div>
                </div>

                <div className="description">
                    <p>Aceite de Oliva Virgen Extra de categoría superior, obtenido directamente de aceitunas cuidadosamente seleccionadas y recolectadas a mano en olivares centenarios de Jaén, Andalucía. El resultado es un aceite de oliva de color verde brillante, con aromas frutados y un sabor equilibrado entre notas amargas y picantes. Cada botella de este Aceite de Oliva Virgen Extra Premium es el fruto del arduo trabajo y conocimiento de los agricultores y productores artesanos de Olivares de Jaén.</p>
                </div>
            </div>
            <div className="details-shop">   
                <AiFillHeart className='heart'/>
                <div className="buy">
                    <span>Comprar</span> 
                   <FaShoppingCart className='cart' />
                </div> 

                <div className="productPrice">25 €</div>
            
               
            </div>
        </div>
        

    )



}

export { ProductCardHome };