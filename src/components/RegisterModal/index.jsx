import React, { useEffect, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { resetStatesRegisterModal, setStateRegisterModal, toggleStateRegisterModal } from '../../actions/registerModal';
import { fetchCreateUser } from '../../actions/user';
import Modal from '../Modal';

function RegisterModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const emailInput = useRef();

  const {
    email,
    password1,
    password2,
    emailHelperText,
    password1HelperText,
    password2HelperText,
    showPassword1,
    showPassword2,
    responseMessage,
    loading,
  } = useSelector((state) => state.registerModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateRegisterModal(state, value));
  };

  const handleToggleState = (state) => {
    dispatch(toggleStateRegisterModal(state));
  };

  const handleSubmitRegisterForm = (event) => {
    event.preventDefault();
    dispatch(fetchCreateUser(navigate, pathname));
  };

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
    if (password1.length === 0) {
      handleSetState('password1HelperText', 'Password must not be empty');
    }
    else {
      const passwordIsValid = password1.match(passwordRegex);
      if (passwordIsValid) {
        handleSetState('password1HelperText', '');
      }
      else {
        handleSetState('password1HelperText', 'Password is not valid');
      }
    }
  }, [password1]);

  useEffect(() => {
    if (password2.length === 0) {
      handleSetState('password2HelperText', 'Password must not be empty');
    }
    else if (password2 === password1) {
      handleSetState('password2HelperText', '');
    }
    else {
      handleSetState('password2HelperText', 'Password is not valid');
    }
  }, [password1, password2]);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => () => {
    dispatch(resetStatesRegisterModal());
  }, []);

  return (
    <Modal
      closeButtonPath={`${pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname}`}
      title="Register"
    >
      <form className="modal__content-body-form" onSubmit={handleSubmitRegisterForm}>
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
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: password1HelperText === '' && '#00B800 !important' } }}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={showPassword1 ? 'text' : 'password'}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: password1HelperText === '' && '#00B800 !important' } }}
              value={password1}
              onChange={(event) => handleSetState('password1', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: password1HelperText === '' && '#00B800 !important' }}
                    aria-label="toggle password visibility"
                    onClick={() => handleToggleState('showPassword1')}
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
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: password1HelperText !== '' ? '1.5rem' : '0' }}>{password1HelperText}</FormHelperText>
          </FormControl>
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: password2HelperText === '' && '#00B800 !important' } }}>
            <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
            <OutlinedInput
              type={showPassword2 ? 'text' : 'password'}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: password2HelperText === '' && '#00B800 !important' } }}
              value={password2}
              onChange={(event) => handleSetState('password2', event.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: password2HelperText === '' && '#00B800 !important' }}
                    aria-label="toggle password visibility"
                    onClick={() => handleToggleState('showPassword2')}
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
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: password2HelperText !== '' ? '1.5rem' : '0' }}>{password2HelperText}</FormHelperText>
          </FormControl>
        </div>
        <div className="modal__content-body-form-submit">
          {loading ? (
            <LoadingButton className="modal__content-body-form-submit-button" loading variant="contained">Register</LoadingButton>
          ) : (
            <Button className="modal__content-body-form-submit-button" variant="contained" type="submit">Register</Button>
          )}
          <p className="modal__content-body-form-submit-responseText" style={{ maxHeight: responseMessage !== '' ? '1.5rem' : '0' }}>{responseMessage}</p>
        </div>
      </form>
    </Modal>
  );
}

RegisterModal.propTypes = {

};

export default RegisterModal;
