import React, { useRef } from 'react'
import './styles.scss'
import { Checkbox, message } from 'antd';
import { Link } from 'react-router-dom'
export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()
    return (
        <div className="text-container">
            <div className="user-data">
                <input type="text" min='5' maxLength='20' placeholder="Enter Your Email or Username" autocomplete="false" ref={emailRef}></input>
                <input type="password" min='5' maxLength='20' placeholder="Enter Your Password" autocomplete="new-password" ref={passRef}></input>
                <Checkbox className="remember-me">Remember me</Checkbox>
            </div>
            <div className="login-btn">
                <button onClick={() => {
                    const data = {
                        email: emailRef.current.value,
                        password: passRef.current.value
                    }
                    const requestOptio = {

                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': 'http://localhost:3001'
                        },
                        body: JSON.stringify(data)
                    };

                    fetch('http://localhost:3001/user/login', requestOptio)
                        .then(response => response.json)
                        .then(data => {
                            if (data.success) {
                                message.success(data.message)
                            }
                            else {
                                message.error('No User Exist')
                            }
                        })
                }


                }>Login</button>
            </div>
            <div className="forget-password">
                <Link className="forget">Forget Password</Link>
            </div>

        </div >
    )
}
