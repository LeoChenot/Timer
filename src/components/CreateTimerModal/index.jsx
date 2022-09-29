import React, { useEffect } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { selectListId, setNewDelay, setNewString } from '../../actions/createTimerModal';
import { fetchCreateTimer } from '../../actions/user';

function CreateTimerModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const listId = Number(params.listId);

  const {
    name,
    hours,
    minutes,
    seconds,
  } = useSelector((state) => state.createTimerModalReducer);

  const handleSetNewString = (state, value) => {
    dispatch(setNewString(state, value));
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    dispatch(fetchCreateTimer());
    navigate('/');
  };

  useEffect(() => {
    dispatch(selectListId(listId));
  }, []);

  useEffect(() => {
    dispatch(setNewDelay((Number(hours) * 60 * 60) + (Number(minutes) * 60) + (Number(seconds))));
  }, [hours, minutes, seconds]);

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate('/')}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Create Timer</h2>
        <form className="modal__content-form" onSubmit={handleSubmitCreate}>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(event) => handleSetNewString('name', event.target.value)}
              required
            />
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormGroup style={{ display: 'flex', flexDirection: 'row', columnGap: '1rem' }}>
              <TextField
                id="outlined-basic"
                label="Hours"
                variant="outlined"
                type="number"
                value={hours}
                onChange={(event) => handleSetNewString('hours', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 24 } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="Minutes"
                variant="outlined"
                type="number"
                value={minutes}
                onChange={(event) => handleSetNewString('minutes', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="Seconds"
                variant="outlined"
                type="number"
                value={seconds}
                onChange={(event) => handleSetNewString('seconds', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
            </FormGroup>
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          <Button variant="contained" type="submit">Add</Button>
        </form>
      </div>
    </div>
  );
}

CreateTimerModal.propTypes = {

};

export default CreateTimerModal;
