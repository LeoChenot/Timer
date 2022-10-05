import { Visibility, VisibilityOff } from '@mui/icons-material';
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
import { fetchReadUser } from '../../actions/user';
import Modal from '../Modal';

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
    emailHelperText,
    passwordHelperText,
    showPassword,
    responseMessage,
    loading,
  } = useSelector((state) => state.loginModalReducer);

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (email.length === 0) {
      handleSetState('emailHelperText', 'Email must not be empty');
    }
    else {
      const emailIsValid = email.match(emailRegex);
      if (emailIsValid) {
        handleSetState('emailHelperText', '');
      }
      else {
        handleSetState('emailHelperText', 'Email is not valid');
      }
    }
  }, [email]);

  useEffect(() => {
    if (password.length === 0) {
      handleSetState('passwordHelperText', 'Password must not be empty');
    }
    else {
      const passwordIsValid = password.match(passwordRegex);
      if (passwordIsValid) {
        handleSetState('passwordHelperText', '');
      }
      else {
        handleSetState('passwordHelperText', 'Password is not valid');
      }
    }
  }, [password]);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => () => {
    dispatch(resetStatesLoginModal());
  }, []);

  return (
    <Modal
      closeButtonPath={`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}`}
      title="Login"
    >
      <form className="modal__content-body-form" onSubmit={handleSubmitLogin}>
        <div className="modal__content-body-form-fields">
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: emailHelperText === '' && '#00B800 !important' } }}>
            <TextField
              inputRef={emailInput}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: emailHelperText === '' && '#00B800 !important' } }}
              label="Email"
              autoComplete="username"
              variant="outlined"
              type="text"
              value={email}
              onChange={(event) => handleSetState('email', event.target.value)}
              required
            />
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: emailHelperText !== '' ? '1.5rem' : '0' }}>{emailHelperText}</FormHelperText>
          </FormControl>
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: passwordHelperText === '' && '#00B800 !important' } }}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: passwordHelperText === '' && '#00B800 !important' } }}
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
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: passwordHelperText !== '' ? '1.5rem' : '0' }}>{passwordHelperText}</FormHelperText>
          </FormControl>
        </div>
        <div className="modal__content-body-form-submit">
          {loading ? (
            <LoadingButton className="modal__content-body-form-submit-button" loading variant="contained">Login</LoadingButton>
          ) : (
            <Button className="modal__content-body-form-submit-button" variant="contained" type="submit">Login</Button>
          )}
          <p className="modal__content-body-form-submit-responseText" style={{ maxHeight: responseMessage !== '' ? '1.5rem' : '0' }}>{responseMessage}</p>
        </div>
      </form>
    </Modal>
  );
}

LoginModal.propTypes = {

};

export default LoginModal;
