import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addCartThunk } from '../redux/actions';
import swal from 'sweetalert';


const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addShoppingCart = e =>{
        
        e.preventDefault();
        if(localStorage.getItem("token") !== ""){
            const productAddCart = {"id": product.id, "quantity": 1};
            dispatch(addCartThunk(productAddCart));
            swal({
                title: "Success",
                text: "successfully added to cart",
                icon: "success",
                buttons: "Ok"
            })
        }else{
            navigate("/singin");
        }
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