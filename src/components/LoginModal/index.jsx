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
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetStatesLoginModal, setStateLoginModal, toggleStateLoginModal } from '../../actions/loginModal';

// import PropTypes from 'prop-types';
import './style.scss';
import { fetchReadUser } from '../../actions/user';

function LoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const emailInput = useRef();

  const handleSetState = (state, value) => {
    dispatch(setStateLoginModal(state, value));
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(fetchReadUser(navigate, pathname));
  };

  const {
    email,
    password,
    showPassword,
    responseMessage,
    loading,
  } = useSelector((state) => state.loginModalReducer);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => () => {
    dispatch(resetStatesLoginModal());
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton
          className="modal__content-closeButton"
          aria-label="add"
          onClick={() => navigate(`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}`)}
        >
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Login</h2>
        <form className="modal__content-form" onSubmit={handleSubmitLogin}>
          <FormControl>
            <TextField
              inputRef={emailInput}
              id="outlined-basic"
              label="Email"
              autoComplete="username"
              variant="outlined"
              type="text"
              value={email}
              onChange={(event) => handleSetState('email', event.target.value)}
              required
            />
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => handleSetState('password', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => dispatch(toggleStateLoginModal('showPassword'))}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Password"
              autoComplete="current-password"
              required
            />
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          {loading ? (
            <LoadingButton loading variant="contained">Login</LoadingButton>
          ) : (
            <Button variant="contained" type="submit">Login</Button>
          )}
          <FormHelperText id="my-helper-text">{responseMessage}</FormHelperText>
        </form>
      </div>
    </div>
  );
}

LoginModal.propTypes = {

};

export default LoginModal;
