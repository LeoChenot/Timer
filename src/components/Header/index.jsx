import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <Link
        className="header__logo"
        to="/"
      >
        <h1 className="header__logo-text">Timers</h1>
      </Link>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
