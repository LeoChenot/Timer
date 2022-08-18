import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import './style.scss';
import {
  changeShowPassword1,
  changeShowPassword2,
  setNewEmailValue,
  setNewPassword1Value,
  setNewPassword2Value,
} from '../../actions/registerModal';

function RegisterModal() {
  const dispatch = useDispatch();

  const handleSetNewEmailValue = (event) => {
    dispatch(setNewEmailValue(event.target.value));
  };

  const handleSetNewPassword1Value = (event) => {
    dispatch(setNewPassword1Value(event.target.value));
  };

  const handleSetNewPassword2Value = (event) => {
    dispatch(setNewPassword2Value(event.target.value));
  };

  const handleChangeShowPassword1 = () => {
    dispatch(changeShowPassword1());
  };

  const handleChangeShowPassword2 = () => {
    dispatch(changeShowPassword2());
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const {
    emailValue,
    password1Value,
    password2Value,
    showPassword1,
    showPassword2,
  } = useSelector((state) => state.registerModalReducer);

  return (
    <div className="registerModal">
      <div className="registerModal__form">
        <h2>Register Form</h2>
        <FormGroup>
          <FormControl>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" value={emailValue} onChange={handleSetNewEmailValue} required />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword1 ? 'text' : 'password'}
              value={password1Value}
              onChange={handleSetNewPassword1Value}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleChangeShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            )}
              label="Password"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword2 ? 'text' : 'password'}
              value={password2Value}
              onChange={handleSetNewPassword2Value}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleChangeShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            )}
              label="Password"
              required
            />
          </FormControl>
          <Button variant="contained">Register</Button>
        </FormGroup>
      </div>
    </div>
  );
}

RegisterModal.propTypes = {

};

export default RegisterModal;
