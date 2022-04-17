import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Itempurchase from '../components/Itempurchase';
import { getUserPurchases } from '../redux/actions';
import {TopItemNavigation} from '../components/subComponents';
import '../css/StylePurchases.css';

const Pucharses = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUserPurchases());
    },[dispatch]);
    
    const listPurchases = useSelector(state => state.purchases);
    
    return (
        <div className='container-purchases'>
            <div className='container-child-purchases'>
                <TopItemNavigation title={"Purchases"}/>
                {
                    listPurchases.map((item)=>(
                        <Itempurchase item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Pucharses;