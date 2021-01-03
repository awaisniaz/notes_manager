import React, { Component } from 'react'
import './styles.scss'
import Icon from '../assets/writing.svg'
import LoginDialog from '../components/loginDialog/loginDialog'

export default class splachscreen extends Component {
    constructor() {
        super()
        this.state = { dialog: false }
    }
    render() {
        return (
            <div className="main-container">
                <div className="center-div">
                    <div className="logo"><img src={Icon} alt="logo" /></div>
                    <div className="caption"><p>Wellcome to Note Manager</p></div>
                    <div className="action-btn">
                        <button className="Login btn" onClick={() => {
                            this.setState({ dialog: !this.state.dialog })
                        }}>Login</button>
                        <button className="Registration btn"> Registration</button>
                    </div>
                </div>
                <LoginDialog dialog={this.state.dialog} />
            </div>
        )
    }
}
