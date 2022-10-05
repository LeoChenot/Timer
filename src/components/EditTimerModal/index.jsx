import React, { useEffect, useRef } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { resetStatesEditTimerModal, setStateEditTimerModal } from '../../actions/editTimerModal';
import { fetchUpdateTimer } from '../../actions/user';
import Modal from '../Modal';
import { fetchUpdateTimerExpo } from '../../actions/home';

function EditTimerModal({ timerExpo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const listId = Number(params.listId);
  const timerId = Number(params.timerId);

  const nameInput = useRef();

  const { lists } = useSelector((state) => state.userReducer);
  const { selectedTimer } = useSelector((state) => state.editTimerModalReducer);
  const homeReducer = useSelector((state) => state.homeReducer);

  const {
    name,
    hours,
    minutes,
    seconds,
    nameHelperText,
    delayHelperText,
    responseMessage,
    loading,
  } = useSelector((state) => state.editTimerModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateEditTimerModal(state, value));
  };

  useEffect(() => {
    if (timerExpo && timerExpo === true) {
      handleSetState('selectedTimer', homeReducer.timer);
    }
    else if (lists) {
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

  const handleSubmitEditExpo = (event) => {
    event.preventDefault();
    dispatch(fetchUpdateTimerExpo(navigate));
  };

  useEffect(() => {
    nameInput.current.focus();
    handleSetState('selectedListId', listId);
  }, []);

  useEffect(() => {
    if (name.length === 0) {
      handleSetState('nameHelperText', 'Name must not be empty');
    }
    else {
      handleSetState('nameHelperText', '');
    }
  }, [name]);

  useEffect(() => {
    const delay = (Number(hours) * 60 * 60) + (Number(minutes) * 60) + (Number(seconds));
    handleSetState('delay', delay);
  }, [hours, minutes, seconds]);

  useEffect(() => () => {
    dispatch(resetStatesEditTimerModal());
  }, []);

  return (
    <Modal
      closeButtonPath="/"
      title="Edit Timer"
    >
      <form className="modal__content-body-form" onSubmit={(timerExpo && timerExpo === true) ? handleSubmitEditExpo : handleSubmitEdit}>
        <div className="modal__content-body-form-fields">
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: nameHelperText === '' && '#00B800 !important' } }}>
            <TextField
              inputRef={nameInput}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: nameHelperText === '' && '#00B800 !important' } }}
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(event) => handleSetState('name', event.target.value)}
              required
            />
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: nameHelperText !== '' ? '1.5rem' : '0' }}>{nameHelperText}</FormHelperText>
          </FormControl>
          <FormControl>
            <FormGroup style={{ display: 'flex', flexDirection: 'row', columnGap: '1rem' }}>
              <TextField
                sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: delayHelperText === '' && '#00B800 !important' } }}
                label="Hours"
                variant="outlined"
                type="number"
                value={hours}
                onChange={(event) => handleSetState('hours', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 24 } }}
                required
              />
              <TextField
                sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: delayHelperText === '' && '#00B800 !important' } }}
                label="Minutes"
                variant="outlined"
                type="number"
                value={minutes}
                onChange={(event) => handleSetState('minutes', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
              <TextField
                sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: delayHelperText === '' && '#00B800 !important' } }}
                label="Seconds"
                variant="outlined"
                type="number"
                value={seconds}
                onChange={(event) => handleSetState('seconds', event.target.value)}
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                required
              />
            </FormGroup>
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: delayHelperText !== '' ? '1.5rem' : '0' }}>{delayHelperText}</FormHelperText>
          </FormControl>
        </div>
        <div className="modal__content-body-form-submit">
          {((timerExpo && timerExpo === true) ? homeReducer.loading : loading) ? (
            <LoadingButton className="modal__content-body-form-submit-button" loading variant="contained">Edit</LoadingButton>
          ) : (
            <Button className="modal__content-body-form-submit-button" variant="contained" type="submit">Edit</Button>
          )}
          <p className="modal__content-body-form-submit-responseText" style={{ maxHeight: responseMessage !== '' ? '1.5rem' : '0' }}>{responseMessage}</p>
        </div>
      </form>
    </Modal>
  );
}

EditTimerModal.defaultProps = {
  timerExpo: undefined,
};

EditTimerModal.propTypes = {
  timerExpo: PropTypes.bool,
};

export default EditTimerModal;
