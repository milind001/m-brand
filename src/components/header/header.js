import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import './header.scss';
import logo from '../../assets/img/logo.jpg'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='logo' alt='Logo' src={logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);