import React from 'react';
import { Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addCartThunk } from '../redux/actions';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    const addShoppingCart = () =>{
        const productAddCart = {"id": product.id, "quantity": 1};
        dispatch(addCartThunk(productAddCart));
    }

    return (
        <div className='card-product-dad'>
            <Link to={`/products/${product?.id}`} className='card-product'>
            
                <div className='cont-img'>
                    <img src={product.productImgs?.[0]} alt={`imagen ${product?.title}`}/>
                </div>
                
                <div className='cont-data-product-card'>
                    <span>
                        <p>Price</p>
                        <p style={(product?.status === "active")?{color: 'green'}:{color: 'green'}}>
                        {product.status}
                    </p>
                    </span>
                    <h3>$ {product?.price}</h3>
                    
                    <h4>{product?.title}</h4>
                </div>
            </Link>
            <span className='cart' onClick={addShoppingCart}><i className="fa-solid fa-cart-shopping"></i></span>
        </div>
        
    );
};

export default ProductCard;