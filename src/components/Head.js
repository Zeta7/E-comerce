import React, { useEffect, useState } from 'react';
import { NotLoggedIn, YesLoggetIn } from './subComponents';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchProductThunk } from '../redux/actions';

const Head = () => {
    useEffect(()=>{

    },[])

    const dispatch = useDispatch();
    const [searchProduct, setSearchProduct] = useState("");

    const Submit = e =>{
        e.preventDefault();
        dispatch(getSearchProductThunk(searchProduct));
    }

    return (
        <div className='container-head-padre'>
            <div className='container-head'>
                <div className='ctn-1'>
                    <div className='container-logo'>
                        <Link to="/"><h2>E-Comerce</h2></Link>
                    </div>
                </div>
                <div className='ctn-2'>

                    <div className='container-search'>
                        <form onSubmit={Submit}>
                            <input type="text" placeholder='Search products, brands and more...' 
                                value={searchProduct}
                                onChange={e=>setSearchProduct(e.target.value)}
                            />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>

                    <div className='container-head-nav-2'>
                        {
                        /*
                        <a href=''>Category <i className="fa-solid fa-angle-down"></i></a>
                        */
                        }
                        <Link to='/singin'>Offers</Link>
                        <Link to='/singin'>Record</Link>
                        <a href='#'>Help</a>
                    </div>
                </div>
                {localStorage.getItem("token")?<YesLoggetIn />:<NotLoggedIn />}
            </div>
        </div>
    );
};

export default Head;