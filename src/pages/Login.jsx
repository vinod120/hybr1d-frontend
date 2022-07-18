import React from 'react'
import '../styles/login.css';
import Logo from '../images/login_logo.jpeg';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-body">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="login-header">
                    <h1>Sign in to Hybr1d</h1>
                </div>
                <div className="login-form">
                    <label htmlFor="login-label">
                        Username
                    </label>
                    <input type="text" name="username" />
                    <label htmlFor="login-label">
                        Password
                    </label>
                    <input type="password" name="username" />
                    <div className="login-btn">
                        <input type="submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login