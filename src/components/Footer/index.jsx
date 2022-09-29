import React from 'react';

// import PropTypes from 'prop-types';
import './style.scss';

function Footer() {
  return (
    <div className="footer">
      Copyright ©
      {' '}
      {new Date().getFullYear()}
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
