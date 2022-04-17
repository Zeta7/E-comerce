import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemProductCart from '../components/ItemProductCart';
import '../css/StyleShoppingCart.css';
import { getCartProductThunk, esxcutePucharse } from '../redux/actions';
import TopItemNavigation from '../components/subComponents/TopItemNavigation';


const ShoppingCart = () => {
//-------------------- trae los productos del carrito --------------------------//
    const cartProducts = useSelector(state => state.cartProducts);

// ---------------------- dispatch -------------------------------------------//
    const dispatch = useDispatch();

//------- hacer el llamado para la obtencion de los productos de carrito -----//
    useEffect(()=>{
        dispatch(getCartProductThunk())
    },[]);

//----------------- contador de la suma de los totales ----------------------//
    const[total, setTotal] = useState(0);
    useEffect(()=>{
        let subtotal=0;
        for(let i = 0; i < cartProducts.length; i++){
            subtotal+=(cartProducts[i].productsInCart.quantity * cartProducts[i].price );
        }
        setTotal(subtotal.toFixed(2));
    },[cartProducts])
    
//-------------------- execute pucharse4 --------------------------------------//
    const executePrucharseCart = () =>{
        const data = {"street": "av. españa","colony": "los olivos","zipCode": 1234,"city": "PER","references": "UCV"};
        dispatch(esxcutePucharse(data));
    }
    
    return (
        <div className='container-dad-shopping-cart'>
            <div className='container-principal-cart'>
                <TopItemNavigation title={"Shopping Cart"}/>
                <table>
                    <thead>                  
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th className='final-th'></th>
                        </tr>
                    </thead>  
                    <tbody>
                    {
                        cartProducts.map(item =>(
                            <ItemProductCart item={item} key={item.id} />
                        ))
                    }
                    </tbody>
                </table>
                <div className='cont-total-btn-comp'>
                    <span>
                        <p>Total: </p>
                        <h4>$ {total}</h4>
                    </span>
                    <button onClick={executePrucharseCart}>Execute pucharse</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;