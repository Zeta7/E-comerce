import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/StyleTopItemNavigation.css';

const TopItemNavigation = ({title}) => {
    return (
        <div className='cont-child-nav-product-detail'>
             <Link to={"/"}>Home</Link>
            <li></li>
            <p> {title}</p>
        </div>
    );
};

export default TopItemNavigation;