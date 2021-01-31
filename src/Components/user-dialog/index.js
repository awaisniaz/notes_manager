import React, { useState } from 'react'
import './styles.scss'
import Login from './login-model/login'
import Register from './register-dialog/index'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
export default function Userdialog() {
    const [login, setlogin] = useState(true)
    const [register, setregister] = useState(false)
    return (
        <Router>
            <div className="usermodel-container">
                <div className="login-register-model">
                    <div className="user-action">
                        <button onClick={() => {
                            setlogin(true)
                            setregister(false)
                        }} className={login ? 'active' : ''}> Login </button>
                        <button onClick={() => {
                            setlogin(false)
                            setregister(true)
                        }} className={register ? 'active' : ''}>Signup</button>
                    </div>
                    <Switch>
                        <div className="user-data">
                            {
                                login ? <Login/> : <Register />
                            }


                        </div>
                    </Switch>
                </div>

            </div >
        </Router>
    )
}
