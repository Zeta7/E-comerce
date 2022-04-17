import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { searchCategoriesThunk } from '../redux/actions';
import '../css/StyleSimilarProducts.css';

const SimilarProducts = ({nameProd}) => {
    const category = useSelector(state => state.category);

    const dispatch = useDispatch();

    
    useEffect(()=>{
        for(let i = 0; i < category.length; i++){
            if(nameProd === category[i].name){
                dispatch(searchCategoriesThunk(category[i].id));
            }
        }
    },[nameProd,dispatch, category])

    const product = useSelector(state => state.products);

    return (
        <div className='container-similar-category'>
            <div className='cont-products'>
                        {
                            product.length === 0
                            ?
                            (<p>We didn't found Products with the filters</p>)
                            :
                            (    product?.map(product => (
                                <ProductCard key={product?.id} product={product}/>
                            )))
                        }
            </div>
        </div>
    );
};

export default SimilarProducts;