import React from 'react'
export default function Registerdialog() {
    return (
        <div className="text-container">
            <div className="user-data">
                <input type="text" min='5' maxLength='20' placeholder="Enter Your Username" autocomplete="false"></input>
                <input type="email" min='5' maxLength='20' placeholder="Enter Your Email" autocomplete="false"></input>
                <input type="password" min='5' maxLength='20' placeholder="Enter Your Password" autocomplete="new-password"></input>
                <input type="password" min='5' maxLength='20' placeholder="Confirm Your Password" autocomplete="new-password"></input>
            </div>
            <div className="login-btn">
                <button>Register</button>
            </div>

        </div>
    )
}
