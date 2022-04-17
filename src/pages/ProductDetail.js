import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ProductInformation from '../components/ProductInformation';
import SimilarProducts from '../components/SimilarProducts';
import TopItemNavigation from '../components/subComponents/TopItemNavigation';

const ProductDetail = () => {

    const id = useParams();

    const [product, setproduct] = useState({});
    
    useEffect(()=>{
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id.id}`)
        .then(res=>{
            setproduct(res.data.data.product);
        })
        .catch(error=>{
            console.log(error.response);
        })
    },[id])

    return (
       <div className='container-dad-product-detail-p-1'>
            <div className='container-dad-product-detail-p'> 
                <div className='container-product-detail-dad'>
                    <TopItemNavigation title={product.title}/>
                    <div className='cont-child-info-product-detail'>

                        <Gallery images={product?.productImgs}/>

                        <ProductInformation product={product}/>

                    </div>
                </div>
            </div>
            <div className='container-similar-products'>
                <h4>Discover similar items</h4>
                <SimilarProducts nameProd={product.category}/>
            </div>
        </div>
    );
};

export default ProductDetail;