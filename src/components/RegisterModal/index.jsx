/* eslint-disable brace-style */
/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import { Visibility, VisibilityOff, Clear } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import './style.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  setNewString,
  toggleBoolean,
} from '../../actions/registerModal';
import { register } from '../../actions/auth';

function RegisterModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSetNewString = (state, value) => {
    dispatch(setNewString(state, value));
  };

  const handleToggleBoolean = (state) => {
    dispatch(toggleBoolean(state));
  };

  const handleSubmitRegisterForm = (event) => {
    event.preventDefault();
    dispatch(register());
  };

  const {
    email,
    password1,
    password2,
    emailHelperText,
    password1HelperText,
    password2HelperText,
    showPassword1,
    showPassword2,
  } = useSelector((state) => state.registerModalReducer);

  const handleCloseThisModal = () => {
    navigate(`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}`);
  };

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (email.length === 0) {
      handleSetNewString('emailHelperText', 'Email must not be empty');
    }
    else {
      const emailIsValid = email.match(emailRegex);
      if (emailIsValid) {
        handleSetNewString('emailHelperText', '');
      }
      else {
        handleSetNewString('emailHelperText', 'Email is not valid');
      }
    }
  }, [email]);

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={handleCloseThisModal}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Register</h2>
        <form className="modal__content-form" onSubmit={handleSubmitRegisterForm}>
          <FormControl>
            <TextField
              inputProps={{ className: 'emailtest' }}
              label="Email"
              autoComplete="username"
              variant="outlined"
              type="text"
              value={email}
              onChange={(event) => handleSetNewString('email', event.target.value)}
              required
            />
            <FormHelperText id="my-helper-text">{emailHelperText}</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="password1"
              type={showPassword1 ? 'text' : 'password'}
              value={password1}
              onChange={(event) => handleSetNewString('password1', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleToggleBoolean('showPassword1')}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Password"
              autoComplete="new-password"
              required
            />
            <FormHelperText id="my-helper-text">{password1HelperText}</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
            <OutlinedInput
              id="password2"
              type={showPassword2 ? 'text' : 'password'}
              value={password2}
              onChange={(event) => handleSetNewString('password2', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleToggleBoolean('showPassword2')}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Confirm password"
              autoComplete="new-password"
              required
            />
            <FormHelperText id="my-helper-text">{password2HelperText}</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained">Register</Button>
        </form>
      </div>
    </div>
  );
}

RegisterModal.propTypes = {

};

export default RegisterModal;
