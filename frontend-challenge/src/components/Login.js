import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, roleChange } from '../redux/actions' //OUR ACTIONS
import { useSelector } from 'react-redux'
import history from '../utils/history';
import { withRouter } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const usedispatch = useDispatch();
    const userLogin = (email, password, isAdmin) => usedispatch(login({'email': email, 'password': password, 'isAdmin': isAdmin }));
    const switchToAdmin = () => usedispatch(roleChange('admin'));
    const switchToUser = () => usedispatch(roleChange('user'));
    const currentRole = useSelector((state)=> state.loginReducer.role)

    const handleRoleChange = e => {

        setIsAdmin(true)
        if(isAdmin)
            setIsAdmin(false)
        console.log(isAdmin)
    }
    
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        userLogin(email, password, isAdmin)
        setTimeout(()=> history.push("/user"), 1000 );
    }

    const disabled = () => {
        return email === "" || password === ""
    }

    return (
        <div>
            <form className='login-form'>
                <input type='email' name='email' placeholder='Email' onChange={handleEmailChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange}/>
                <button type='submit' disabled={disabled()} onClick={handleSubmit}>Login</button>
            </form>
            <button onClick={handleRoleChange}>Switch to {isAdmin ? 'user' : 'admin'}</button>
        </div>
    )
}

export default withRouter(Login);

