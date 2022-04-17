import React from 'react';
import '../css/StyleFooter.css';

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='cont-element-footer'>
                <span>
                    <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                    <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                    <i className="fa-brands fa-youtube"></i>
                </span>
            </div>
        </div>
    );
};

export default Footer;