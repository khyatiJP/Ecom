import React from "react";
import logo from '../../../assets/images/logo.png'
import './Header.scss'
import { Button } from 'antd'

const Header = () => {
    return (
        <div className='HeaderMain'>
            <div className='HeaderLeft'>
                <img src={logo} style={{ height: '90px' }} />
            </div>
            <div className='HeaderRight'>
                <Button type="text" className='HButton' ><h3>Login</h3></Button>
                <Button type="text"  className='HButton'><h3>SignUP</h3></Button>
            </div>

        </div>
    )
}

export default Header;