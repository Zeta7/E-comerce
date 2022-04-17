import React from 'react';
import {  useSelector } from 'react-redux';
import Itempurchase from '../components/Itempurchase';
import TopItemNavigation from '../components/subComponents/TopItemNavigation';

const Profile = () => {
//------------------- trae informacion usuario del local storage----------------------//
    const user = JSON.parse(localStorage.getItem("user"));

    const ListPurchases = useSelector(state => state.purchases);

    return (
        <div className='container-profile-dad'>

            <div className='cont-child-profile-1'>
                <TopItemNavigation title={"Profile"}/>
                <div className='cont-child-profile'>
                    
                    <h3>Name: <br/><span>{user.firstName} {user.lastName}</span></h3>
                    <h3>Email: <br/><span>{user.email}</span></h3>
                    <h3>Phone: <br/><span>{user.phone}</span></h3>
                    <h3>Role:<br/> <span>{user.role}</span></h3>
                </div>
            </div>
            <div className='const-child-profile-pucharses'>
                <h2>Purchases</h2>
                <div className='cont-pucharses-profile'>

                    {
                        ListPurchases.map((item)=>(
                            item
                            ?
                            <Itempurchase item={item} key={item.id}/>
                            :
                            <p>You have not made any purchase.</p>
                        ))
                    }
                    
                        
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;