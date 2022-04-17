import React, { useState } from 'react';
import moment from 'moment';

const Itempurchase = ({item}) => {
    const producArr = item.cart.products;
    const [product] = useState(producArr);

    let total = 0;
    for(let i = 0; i < producArr.length; i++){
        total+=producArr[i].price * producArr[i].productsInCart.quantity;
    }

    return (
        <div className='container-item-purchases'>
            <span>{moment(item.createdAt).format('LLL')}</span>
          
                {
                    product.map((p)=>(
                        <div key={p.id }   className='cont-data-purchase'>
                            <p>{p.title}</p>
                            <p>$ {p.price}</p>
                            <p>{p.productsInCart.quantity}</p>
                            <h4>$ {p.price * p.productsInCart.quantity}</h4>
                        </div>
                    ))
                }
            
            <h3>$ {total}</h3>
        </div>
    );
};

export default Itempurchase;