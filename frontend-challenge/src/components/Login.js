import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../redux/actions'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usedispatch = useDispatch();
    const userLogin = (email, password) => usedispatch(login({'email': email, 'password': password }));
    
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        userLogin(email, password)
    }

    const disabled = () => {
        return email === "" || password === ""
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='login-form'>
                <input type='email' name='email' placeholder='Email' onChange={handleEmailChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange}/>
                <button disabled={disabled()}>Login</button>
                <button>Switch to {}</button>
            </form>
        </div>
    )
}

export default Login;