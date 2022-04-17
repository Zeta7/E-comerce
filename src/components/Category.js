import React, { useState } from 'react';
import '../css/StyleCategory.css';
import ItemCategories from './subComponents/ItemCategories';

const Category = () => {

    const [viewPrice, setWiewPrice] = useState(false);
    const [viewCategory, setViewCategory] = useState(false);
    
    const clickPrice = () =>{
        setWiewPrice(!viewPrice);
    }
    const clickCategory = () =>{
        setViewCategory(!viewCategory);
    }
    
    return (
        <div className='container-category'>

            <div className='cont-category'>

                <span onClick={clickPrice}>
                    <p>Price</p>
                    {
                        viewPrice
                        ?<i className="fa-solid fa-angle-up"></i>
                        :<i className="fa-solid fa-angle-down"></i>
                    }
                </span>
                {
                    viewPrice
                    ?
                    <form>
                        <input placeholder='from' type="text"/>
                        <input placeholder='To' type="text"/>
                        <button>Filter price</button>
                    </form>
                    :<></>
                }
            </div>
            <div className='cont-category'>
                <span onClick={clickCategory}>
                    <p>Category</p>
                    {
                        viewCategory
                        ?<i className="fa-solid fa-angle-up"></i>
                        :<i className="fa-solid fa-angle-down"></i>
                    }
                </span>
                    {
                        viewCategory
                        ?<ItemCategories />
                        :<></>
                    }
            </div>
        </div>
    );
};

export default Category;