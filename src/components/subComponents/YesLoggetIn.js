import React from 'react';
import { Link } from 'react-router-dom';
import DropdownUser from '../dropdown/DropdownUser';
import { useState } from 'react';

const YesLoggetIn = () => {
    
    const user =  JSON.parse(localStorage.getItem("user"));

    const [dropdown, setDropdown] = useState(false);
    
    return (
        <>
            <div className='ctn-4'>
                <div 
                    className='container-nav-head1' 
                    onMouseEnter={()=>setDropdown(true)}
                    onMouseLeave={()=>setDropdown(false)}
                >
                    <Link 
                    to="/profile" 
                    >
                        <i className="fa-solid fa-user"/> {user.firstName} {user.lastName}
                    </Link>
                    {dropdown && <DropdownUser />}
                </div>
                <div className='container-nav-head2'>
                    <Link to='/shoppingcart'><i  className="fa-solid fa-cart-shopping"></i> Cart</Link>
                    <Link to='/pucharses'><i className="fa-solid fa-bag-shopping"></i> Purchases</Link>
                </div>
            </div>
        </>
    );
};

export default YesLoggetIn;