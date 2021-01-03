import React from 'react'
import './styles.scss'
import 'antd/dist/antd.css';
import { Checkbox } from 'antd'
import Profile from '../../assets/profile.svg'
export default function loginDialog(props) {
    return (
        <div className={`main-login-container ${props.dialog ? 'show-dialog' : 'hide-dialog'}`} >
            <div className="cancelbutton"><button>X</button></div>
            <div className="inputlogo"><img src={Profile} alt="logo"></img></div>
            <div className="input-container">
                <input type="text" placeholder="Enter your User Name or Email"></input>
                <input type="password" placeholder="Enter Your Password"></input>
                <Checkbox><span style={{ color: '#fff' }}>Remeber Me</span></Checkbox>

            </div>
            <div>

            </div>
        </div>
    )
}
