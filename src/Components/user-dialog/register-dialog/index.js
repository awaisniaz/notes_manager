import React, { useRef } from 'react'
import { message } from 'antd'
import { convertPassword } from '../../../libs/helper'
export default function Registerdialog() {
    const userRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const confirmRef = useRef()
    const fileRef = useRef()

    return (
        <div className="text-container">
            <div className="user-data">
                <input type="text" min='5' maxLength='50' placeholder="Enter Your Username" autocomplete="false" ref={userRef}></input>
                <input type="email" min='5' maxLength='50' placeholder="Enter Your Email" autocomplete="false" ref={emailRef}></input>
                <input type="password" min='5' maxLength='50' placeholder="Enter Your Password" autocomplete="new-password" ref={passRef}></input>
                <input type="password" min='5' maxLength='50' placeholder="Confirm Your Password" autocomplete="new-password" ref={confirmRef}></input>
                <input type="file" ref={fileRef}></input>
            </div>
            <div className="login-btn">
                <button
                    onClick={() => {
                        const data = {
                            name: userRef.current.value,
                            email: emailRef.current.value,
                            password: convertPassword(passRef.current.value),
                            confirm_password: convertPassword(confirmRef.current.value),
                            profile_picture: fileRef.current.value
                        }
                        const requestOptions = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': 'http://localhost:3001'
                            },
                            body: JSON.stringify(data)
                        };
                        fetch('http://localhost:3001/user/registration', requestOptions)
                            .then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    message.success(data.message)
                                }
                            });


                    }}>Register</button>
            </div>

        </div>
    )
}
