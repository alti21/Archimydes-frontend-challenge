import React from 'react'

const Login = () => {

    return (
        <div>
            <form className='login-form'>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <button>Login</button>
                <button>Switch to {}</button>
            </form>
        </div>
    )
}

export default Login;