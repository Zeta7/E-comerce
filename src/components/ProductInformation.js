import React from 'react';
import  {  useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/StyleProductInformation.css';
import { addCartThunk } from '../redux/actions';


const ProductInformation = ({product}) => {
//------------estado para controlar la cantidad de producto-----------------------------//
    const [number, setNumber] = useState(1);

    const dispatch = useDispatch();


    const addCart = () =>{
        const producto = {"id": product.id, "quantity": number}
        dispatch(addCartThunk(producto));
    }

    return (
        <div className='cont-views-info-p-d'>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
                <form>
                    <div className='cont-cont-in-p'>
                        <span className='price-i-p'>
                            <p>Price</p>
                            <h4>$ {product?.price}</h4>
                        </span>

                        <span className='quantity-i-p'>
                            <p>Quantity</p>
                            <div className='cj-q-i-p'>
                                <button 
                                    onClick={()=>setNumber(number-1)} 
                                    disabled={number <= 1}
                                >
                                    -
                                </button> 
                                <h6>{number}</h6>
                                <button onClick={()=>setNumber(number+1)}>+</button>
                            </div>
                        </span>
                    </div>          
                    <button className='btn-add-cart' onClick={addCart}>Add to cart <i className="fa-solid fa-cart-shopping"/></button>
                </form>
        </div>
    );
};

export default ProductInformation;