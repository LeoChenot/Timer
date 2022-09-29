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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import { setNewString, toggleBoolean } from '../../actions/loginModal';

// import PropTypes from 'prop-types';
import './style.scss';

function LoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { auth } = useSelector((state) => state.userReducer);

  const handleSetNewString = (state, value) => {
    dispatch(setNewString(state, value));
  };

  const handleToggleBoolean = (state) => {
    dispatch(toggleBoolean(state));
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  const {
    loginLoading,
    email,
    password,
    showPassword,
  } = useSelector((state) => state.loginModalReducer);

  useEffect(() => {
    if (!loginLoading && auth) {
      let url;
      if (pathname.length > 1) {
        url = pathname.substring(0, pathname.length - 1);
      } else {
        url = pathname;
      }
      navigate(url);
    }
  }, [loginLoading]);

  const handleCloseThisModal = () => {
    navigate(`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}`);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={handleCloseThisModal}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Login</h2>
        <form className="modal__content-form" onSubmit={handleSubmitLogin}>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Email"
              autoComplete="username"
              variant="outlined"
              type="text"
              value={email}
              onChange={(event) => handleSetNewString('email', event.target.value)}
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
              onChange={(event) => handleSetNewString('password', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleToggleBoolean('showPassword')}
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
          {loginLoading ? (
            <LoadingButton loading variant="contained">Login</LoadingButton>
          ) : (
            <Button variant="contained" type="submit">Login</Button>
          )}
        </form>
      </div>
    </div>
  );
}

LoginModal.propTypes = {

};

export default LoginModal;
