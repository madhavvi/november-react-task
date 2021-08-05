import React from 'react';
import logo from '../../Assets/november.svg';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('profile');
        history.push('/login');
    }

    return (
    <header className="header">
        <div className="wrapper">
            <div className="logo">
                <a href='/'>
                    <img src={logo} alt="November logo" />
                </a>
            </div>
            <div className="align-vertical-center">
                <Link onClick={() => logout()}>
                    <AccountCircleOutlinedIcon style={{ verticalAlign: 'middle' }} />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    </header>
    )
};

export default Header;