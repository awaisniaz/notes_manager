import React from 'react'
import './styles.scss'
import { Empty } from 'antd';

export default function index() {
    return (
        <div className="Main-screen-Container">
            <div className="Topbar">
                <h2>Notes Manager</h2>
                <div className="right-panel">
                    <div className="Avatar">A</div>
                    <div className="user-name"><span>Muhammad Awais Niaz</span></div>
                </div>
            </div>
            <div className="content-container">
                <Empty
                    description='No Notes Found Yet' />

            </div>
        </div>
    )
}
