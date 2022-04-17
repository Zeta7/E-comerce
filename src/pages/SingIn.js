import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const SingIn = () => {

    const [viewpas, setViewPas] = useState("Password");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

//-------------- dispatch -----------------------------------------------//
    const dispatch = useDispatch();

//-------------- Navigate -----------------------------------------------//
    const navigate = useNavigate();

    const Submit = e =>{
        e.preventDefault();
        const user = {email, password}
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login/', user)
        .then(res => {
            localStorage.setItem("token", res.data?.data.token);
            localStorage.setItem("user", JSON.stringify(res.data?.data.user));
            setLoginError("");
            navigate("/");
        })
        .catch(error => {
            console.log(error.response.data.status)
            setLoginError(error.response.data.message)
        })
    }

    return (
        <div className='container-from-sing-in'>
            <h2>Sing In</h2>
            <div className='children'>

                <form onSubmit={Submit}> 

                            <input required type="email" placeholder='Email: '
                                value={email} onChange={e=>setEmail(e.target.value)}/>
                            {
                            //----------------- Passwor --------------------------------//
                            }
                            <span>
                                <input required type={viewpas} placeholder='Password: '
                                    value={password} onChange={e=>setPassword(e.target.value)}/>
                                <div onClick={()=>setViewPas(viewpas==="Password"?"text":"Password")}>
                                {
                                    viewpas==="text"
                                    ?<i className="fa-solid fa-eye-slash"></i>
                                    :<i className="fa-solid fa-eye"></i>
                                }
                                </div>
                            </span>
                            <button>Sing in</button>
                            <p style={{textAlign:"center", margin:"0px 0px 10px 0px", color:"red"}}>{loginError}</p>

                            <p>You are not registered <Link to="/createuser">Create account</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SingIn;