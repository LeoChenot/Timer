import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { IconButton } from '@mui/material';
import { Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Modal({
  children, closeButtonPath, title,
}) {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal__content">
        {(closeButtonPath || closeButtonPath === '') && (
          <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate(closeButtonPath)}>
            <Clear className="modal__content-closeButton-icon" />
          </IconButton>
        )}
        <h2 className="modal__content-title">{title}</h2>
        <div className="modal__content-body">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  closeButtonPath: undefined,
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeButtonPath: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Modal;
