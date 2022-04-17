import React from 'react';
import '../../css/StyleCategory.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategoriesThunk } from '../../redux/actions';

const ItemCategories = () => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    const clickCategory = id =>{
        dispatch(searchCategoriesThunk(id));
    }

    return (
        <div>
            {
                category?.map(item =>(
                <div className="item-category-name" 
                    key={item.id} 
                    onClick={()=>clickCategory(item.id)}
                >
                    <p>{item.name}</p>
                </div>
                ))
            }
        </div>
    );
};

export default ItemCategories;