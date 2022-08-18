import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn, faPen, faUser, faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';

function Header() {
  const { search } = useLocation();

  const { auth, id } = useSelector((state) => state.userReducer);

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
          <Link to={`/profile/${id}`}>
            <FontAwesomeIcon icon={faUser} />
            Profile
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faSignOut} />
            Logout
          </Link>
        </div>
      ) : (
        <div className="header__container header__container--right">
          <Link to={search === '?login' ? '/' : '/?login'}>
            <FontAwesomeIcon icon={faSignIn} />
            Login
          </Link>
          <Link to={search === '?register' ? '/' : '/?register'}>
            <FontAwesomeIcon icon={faPen} />
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
