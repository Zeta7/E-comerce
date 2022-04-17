import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartProduct } from '../redux/actions';

const ItemProductCart = ({ item}) => {

    

    const dispatch = useDispatch();


    const deleteProductCart = () =>{
        dispatch(deleteCartProduct(item.id));
    }

    return (
        <>
                <tr className='cont-prod-cart'>
                    <td>
                        <p className='cart-valor'>{item.id}</p>
                    </td>
                    <td>
                        <p className='cart-valor'>{item.title}</p>
                    </td>
                    <td>
                        <p className='cart-valor'>$ {item.price}</p>
                    </td>
                    <td>
                        <p className='cart-valor'>{item.productsInCart.quantity}</p>
                    </td>
                    <td>
                        <p className='cart-valor'>$ {(item.productsInCart.quantity * item.price).toFixed(2) }</p>
                    </td>
                    <td className='block-item-cart-6'>
                        <button className='btn-edit-product-c'><i className="fa-solid fa-pen" /></button>
                        <button onClick={deleteProductCart} className='btn-delete-product-c'><i className="fa-solid fa-trash-can" /></button>
                    </td>
                </tr>  
        </>
    );
};

export default ItemProductCart;