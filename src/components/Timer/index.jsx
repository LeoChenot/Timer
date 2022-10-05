/* eslint-disable no-unused-vars */
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setStateTimer } from '../../actions/user';
import { setStateTimerExpo } from '../../actions/home';

function Timer({
  id, name, delay, currentDelay, isActive, intervalId, listId, dontShowControl, timerExpo,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let hours = Math.floor(currentDelay / 3600);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = Math.floor((currentDelay % 3600) / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = (currentDelay % 3600) % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  const handleSetStateTimer = (_listId, timerId, state, value) => {
    dispatch(setStateTimer(_listId, timerId, state, value));
  };

  const handleSetStateTimerExpo = (state, value) => {
    dispatch(setStateTimerExpo(state, value));
  };

  useEffect(() => {
    if (timerExpo && timerExpo === true) {
      if (isActive && currentDelay > 0) {
        const intervalIdTemp = setTimeout(() => {
          dispatch(setStateTimerExpo('currentDelay', currentDelay - 1));
        }, 1000);
        dispatch(setStateTimerExpo('intervalId', intervalIdTemp));
      } else {
        clearTimeout(intervalId);
        dispatch(setStateTimerExpo('intervalId', undefined));
      }
    }
    else if (isActive && currentDelay > 0) {
      const intervalIdTemp = setTimeout(() => {
        dispatch(setStateTimer(listId, id, 'currentDelay', currentDelay - 1));
      }, 1000);
      dispatch(setStateTimer(listId, id, 'intervalId', intervalIdTemp));
    } else {
      clearTimeout(intervalId);
      dispatch(setStateTimer(listId, id, 'intervalId', undefined));
    }
  }, [isActive, currentDelay]);

  return (
    <div className="timer">
      <div className="timer__header">
        <h4 className="timer__header-name">{name}</h4>
        {(!dontShowControl || dontShowControl === false) && (
          <div className="timer__header-control">
            <IconButton
              className="timer__header-control-editButton"
              aria-label="Edit Timer"
              onClick={() => navigate(`/lists/${listId}/timers/${id}/edit`)}
            >
              <EditIcon className="timer__header-control-editButton-icon" />
            </IconButton>
            <IconButton
              className="timer__header-control-deleteButton"
              aria-label="Delete Timer"
              onClick={() => navigate(`/lists/${listId}/timers/${id}/delete`)}
            >
              <Delete className="timer__header-control-deleteButton-icon" />
            </IconButton>
          </div>
        )}
        {(timerExpo || timerExpo === true) && (
          <div className="timer__header-control">
            <IconButton
              className="timer__header-control-editButton"
              aria-label="Edit Timer"
              onClick={() => navigate('/timer/edit')}
            >
              <EditIcon className="timer__header-control-editButton-icon" />
            </IconButton>
          </div>
        )}
      </div>

      <div className="timer__delay">
        {hours}
        :
        {minutes}
        :
        {seconds}
      </div>
      <div className="timer__commands">
        <Button
          className="timer__commands-button"
          variant="contained"
          onClick={() => ((timerExpo && timerExpo === true) ? handleSetStateTimerExpo('isActive', !isActive) : handleSetStateTimer(listId, id, 'isActive', !isActive))}
        >
          {isActive ? 'Stop' : 'Start'}
        </Button>
        <Button
          className="timer__commands-button"
          variant="contained"
          onClick={() => ((timerExpo && timerExpo === true) ? handleSetStateTimerExpo('currentDelay', delay) : handleSetStateTimer(listId, id, 'currentDelay', delay))}
          disabled={!((!isActive && currentDelay !== delay))}
        >
          Reset
        </Button>
      </div>
      <div />
    </div>
  );
}

Timer.defaultProps = {
  intervalId: undefined,
  dontShowControl: undefined,
  timerExpo: undefined,
};

Timer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  currentDelay: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  intervalId: PropTypes.number,
  listId: PropTypes.number.isRequired,
  dontShowControl: PropTypes.bool,
  timerExpo: PropTypes.bool,
};

export default Timer;
