/* eslint-disable no-unused-vars */
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setStateTimer } from '../../actions/user';

function Timer({
  id, name, delay, currentDelay, isActive, intervalId, listId,
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

  useEffect(() => {
    if (isActive && currentDelay > 0) {
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
      <IconButton
        className="timer__deleteButton"
        aria-label="add"
        onClick={() => navigate(`/lists/${listId}/timers/${id}/delete`)}
      >
        <Clear className="timer__deleteButton-icon" />
      </IconButton>
      <div className="timer__name">
        <span>{name}</span>
        <button type="button" onClick={() => navigate(`/lists/${listId}/timers/${id}/edit`)}>
          <EditIcon />
        </button>
      </div>
      <div className="timer__commands">
        <span>
          {hours}
          :
          {minutes}
          :
          {seconds}
        </span>
        {isActive ? (
          <button type="button" onClick={() => handleSetStateTimer(listId, id, 'isActive', false)}>Stop</button>
        ) : (
          <button type="button" onClick={() => handleSetStateTimer(listId, id, 'isActive', true)}>Start</button>
        )}
        {(!isActive && currentDelay !== delay) ? (
          <button type="button" onClick={() => handleSetStateTimer(listId, id, 'currentDelay', delay)}>Reset</button>
        ) : (
          <button type="button" disabled>Reset</button>
        )}
      </div>
    </div>
  );
}

Timer.defaultProps = {
  intervalId: undefined,
};

Timer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  currentDelay: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  intervalId: PropTypes.number,
  listId: PropTypes.number.isRequired,
};

export default Timer;
