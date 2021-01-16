import React from 'react'
import './styles.scss'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'


export default function login() {
    return (
        <div className="text-container">
            <div className="user-data">
                <input type="text" min='5' maxLength='20' placeholder="Enter Your Email or Username" autocomplete="false"></input>
                <input type="password" min='5' maxLength='20' placeholder="Enter Your Password" autocomplete="new-password"></input>
                <Checkbox className="remember-me">Remember me</Checkbox>
            </div>
            <div className="login-btn">
                <button>Login</button>
            </div>
            <div className="forget-password">
                <Link className="forget">Forget Password</Link>
            </div>

        </div>
    )
}
