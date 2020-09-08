import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/img/logo.jpg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='logo' alt='Logo' src={logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
);

export default Header;