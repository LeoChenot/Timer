import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { changeShowPassword, setNewEmailValue, setNewPasswordValue } from '../../actions/loginModal';

// import PropTypes from 'prop-types';
import './style.scss';

function LoginModal() {
  const dispatch = useDispatch();

  const handleSetNewEmailValue = (event) => {
    dispatch(setNewEmailValue(event.target.value));
  };

  const handleSetNewPasswordValue = (event) => {
    dispatch(setNewPasswordValue(event.target.value));
  };

  const handleChangeShowPassword = () => {
    dispatch(changeShowPassword());
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  const {
    emailValue,
    passwordValue,
    showPassword,
  } = useSelector((state) => state.loginModalReducer);

  return (
    <div className="loginModal">
      <div className="loginModal__form">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmitLogin}>
          <FormGroup>
            <FormControl>
              <TextField id="outlined-basic" label="Email" variant="outlined" type="text" value={emailValue} onChange={handleSetNewEmailValue} required />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={passwordValue}
                onChange={handleSetNewPasswordValue}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleChangeShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
              )}
                label="Password"
                required
              />
            </FormControl>
            <Button variant="contained" type="submit">Login</Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}

LoginModal.propTypes = {

};

export default LoginModal;
