import React from 'react';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {


    return (
            <div className='ctn-3'>
                <div className='container-nav-head'>
                    <Link to='/createuser'><i className="fa-solid fa-user-plus"/> Create account</Link>
                    <Link to='/singin'><i className="fa-solid fa-user-check"/> Sing in</Link>
                    <Link to="/shoppingcart"><i className="fa-solid fa-cart-shopping" /> Cart</Link>
                </div>
            </div>
    );
};

export default NotLoggedIn;