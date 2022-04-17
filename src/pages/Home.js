import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getProductsThunk, getCategoriesThunk } from '../redux/actions';
import Category from '../components/Category';


const Home = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductsThunk());
        dispatch(getCategoriesThunk());
    }, [dispatch]);


    return (
        <section className='container-list-products'>
           <div className='cont-child-home'>
                <Category />
                <div className='cont-products'>
                        {
                            products.length === 0
                            ?
                            (<p>We didn't found Products with the filters</p>)
                            :
                            (    products?.map(product => (
                                <ProductCard key={product?.id} product={product}/>
                            )))
                        }
                </div>
           </div>
        </section>
    );
};

export default Home;