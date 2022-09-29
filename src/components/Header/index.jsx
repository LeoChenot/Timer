import React from 'react';
// import PropTypes from 'prop-types';

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';

function Header() {
  const { pathname } = useLocation();

  const { auth } = useSelector((state) => state.userReducer);

  return (
    <header className="header">
      <div className="header__container header__container--left" />
      <div className="header__container header__container--middle">
        <Link
          className="header__logo"
          to="/"
        >
          <h1 className="header__logo-text">Timers</h1>
        </Link>
      </div>
      {auth ? (
        <div className="header__container header__container--right">
          <Link to="/profile">
            <PersonIcon />
            Profile
          </Link>
          <Link to="/logout">
            <LogoutIcon />
            Logout
          </Link>
        </div>
      ) : (
        <div className="header__container header__container--right">
          <Link to={`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}/?login`}>
            <LoginIcon />
            Login
          </Link>
          <Link to={`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}/?register`}>
            <EditIcon />
            Register
          </Link>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {

};

export default Header;
