import React from 'react'
import './styles.scss'
import Topbar from '../Components/topbar/index'
import Usermodel from './user-dialog/index'
export default function Main() {
    return (
        <div className="main-container">
            <Topbar />
            <Usermodel />
        </div>
    )
}
