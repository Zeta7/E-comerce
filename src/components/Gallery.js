import React, { useState } from 'react';
import '../css/StyleGallery.css';

const Gallery = ({ images=[] }) => {

    const [ imagesC, setImagesC ] = useState(1);

    const next = 100 / images.length;

    const StyleList = {
        width: `${100 * images.length}%`,
        transform: `translateX(-${(imagesC-1)*next}%)`
    }

    return (
        <div className="container-images-g">
            <div className="gallery">
                <div className="button-gallery left">
                    <button 
                        onClick={() => setImagesC(imagesC-1)}
                        disabled={imagesC <= 1}
                    >
                        <i className="fa-solid fa-angle-left"/>
                    </button>
                </div>
                <div className="button-gallery right">
                    <button 
                        onClick={() => setImagesC(imagesC+1)}
                        disabled={imagesC >= images.length}
                    >
                        <i className="fa-solid fa-angle-right"/>
                    </button>
                </div>
                
                <ul className="images-list" style={StyleList}>
                {
                    images.map(image => (
                        <li key={image}>
                            <img src={image} alt="" />
                        </li>
                    ))
                }
                </ul>
            </div>

            <ul className="images-preview">
                {
                    images.map((image, i) => (
                        <li 
                            key={image} 
                            className={imagesC === i+1 ? 'selec' : ''}
                        >
                            <img 
                                src={image} 
                                alt="" 
                                onClick={() => setImagesC(i+1)}
                            />
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Gallery;