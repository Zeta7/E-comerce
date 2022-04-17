import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DropdownUser = () => {

//-------------- Navigate -----------------------------------------------//
    const navigate = useNavigate();

//--------------- trael el objeto del local storge ---------------------//
    const user = JSON.parse(localStorage.getItem("user"));

    const SignOff = () =>{
        localStorage.setItem("token", "");
        localStorage.setItem("user", JSON.stringify({}));
        navigate("/");
    }


    return (
        <div className='container-dorpdown-user'>
            <div className='logo'><i className="fa-solid fa-user"/></div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <div className='cont-link-profile'><Link className='link-profile' to="/profile">Profile</Link></div>
            <div className='cont-link-sing-off' onClick={SignOff}>Log out</div>
        </div>
    );
};

export default DropdownUser;