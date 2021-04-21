import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, roleChange } from '../redux/actions' //OUR ACTIONS
import { useSelector } from 'react-redux'
import { initialState } from '../redux/initialState';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usedispatch = useDispatch();
    const userLogin = (email, password) => usedispatch(login({'email': email, 'password': password }));
    const switchToAdmin = () => usedispatch(roleChange('admin'));
    const switchToUser = () => usedispatch(roleChange('user'));
    const currentRole = useSelector((state)=> state.loginReducer.role)

    const handleRoleChange = () => {
        if(currentRole === 'user')
            switchToAdmin();
        else if(currentRole === 'admin')
            switchToUser()
    }
    
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
            </form>
            <button onClick={handleRoleChange}>Switch to {currentRole}</button>
        </div>
    )
}

export default Login;