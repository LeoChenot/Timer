import React, { useEffect, useRef } from 'react';
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
import { LoadingButton } from '@mui/lab';
import { resetStatesEditTimerModal, setStateEditTimerModal } from '../../actions/editTimerModal';
import { fetchUpdateTimer } from '../../actions/user';

function EditTimerModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const listId = Number(params.listId);
  const timerId = Number(params.timerId);

  const nameInput = useRef();

  const { lists } = useSelector((state) => state.userReducer);
  const { selectedTimer } = useSelector((state) => state.editTimerModalReducer);

  const {
    name,
    hours,
    minutes,
    seconds,
    responseMessage,
    loading,
  } = useSelector((state) => state.editTimerModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateEditTimerModal(state, value));
  };

  useEffect(() => {
    if (lists) {
      const listFound = lists.find((list) => list.id === listId);
      const timerFound = listFound.timers.find((timer) => timer.id === timerId);
      handleSetState('selectedTimer', timerFound);
    }
  }, [lists]);

  useEffect(() => {
    if (selectedTimer) {
      const selectedTimerHours = Math.floor(selectedTimer.delay / 3600);
      const selectedTimerMinutes = Math.floor((selectedTimer.delay % 3600) / 60);
      const selectedTimerSeconds = (selectedTimer.delay % 3600) % 60;

      handleSetState('name', selectedTimer.name);
      handleSetState('hours', selectedTimerHours);
      handleSetState('minutes', selectedTimerMinutes);
      handleSetState('seconds', selectedTimerSeconds);
    }
  }, [selectedTimer]);

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    dispatch(fetchUpdateTimer(navigate));
  };

  useEffect(() => {
    nameInput.current.focus();
    handleSetState('selectedListId', listId);
  }, []);

  useEffect(() => {
    const delay = (Number(hours) * 60 * 60) + (Number(minutes) * 60) + (Number(seconds));
    handleSetState('delay', delay);
  }, [hours, minutes, seconds]);

  useEffect(() => () => {
    dispatch(resetStatesEditTimerModal());
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate('/')}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Edit Timer</h2>
        <form className="modal__content-form" onSubmit={handleSubmitEdit}>
          <FormControl>
            <TextField
              inputRef={nameInput}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(event) => handleSetState('name', event.target.value)}
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
                onChange={(event) => handleSetState('hours', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 24 } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="Minutes"
                variant="outlined"
                type="number"
                value={minutes}
                onChange={(event) => handleSetState('minutes', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="Seconds"
                variant="outlined"
                type="number"
                value={seconds}
                onChange={(event) => handleSetState('seconds', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
            </FormGroup>
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          {loading ? (
            <LoadingButton loading variant="contained">Edit</LoadingButton>
          ) : (
            <Button variant="contained" type="submit">Edit</Button>
          )}
          <FormHelperText id="my-helper-text">{responseMessage}</FormHelperText>
        </form>
      </div>
    </div>
  );
}

EditTimerModal.propTypes = {

};

export default EditTimerModal;
