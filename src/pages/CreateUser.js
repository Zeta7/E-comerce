import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => {

    const [viewpas, setViewPas] = useState("Password");

//-------------------- datos de registro -----------------------------------------//
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

//--------------------- registrar Usuario ------------------------------------------//
    const Submit = (e) =>{
        e.preventDefault();
        
        const user = {firstName, lastName, email, password, phone, role };
        console.log(user);
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/', user)
        .then(res => {
            console.log(res);
            alert("usuario creado exitosamente")
        })
        .catch(error => console.error(error.response))
    }

    return (
        <div className='container-form-create-user'>
            <div className='child'>
                    <h2>Create account</h2>
                <div className='sub-child'>
                    <form onSubmit={Submit}> 
                        <input required type="text" placeholder='First name: ' 
                            value={firstName} onChange={e=>setFirstName(e.target.value)}/>

                        <input required type="text" placeholder='Last name: '
                            value={lastName} onChange={e=>setLastName(e.target.value)}/>

                        <input required type="text" placeholder='Phone:' 
                            value={phone} onChange={e=>setPhone(e.target.value)}/>

                        <input required type='text' placeholder='Role: '
                            value={role} onChange={e=>setRole(e.target.value)}/>

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

                        <button>Create account</button>

                        <p>Already have an account? <Link to="/singin">Sign-In</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;