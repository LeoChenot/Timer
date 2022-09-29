import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  decreaseTimerById,
  deleteIntervalId,
  resetTimerById,
  saveIntervalId,
  startTimerById,
  stopTimerById,
} from '../../actions/timers';

function Timer({
  id, name, delay, currentDelay, isActive, intervalId, listId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let editname = false;

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

  const test = () => {
    console.log('je veux edit le name');
    editname = !editname;
  };

  const startTimer = () => {
    dispatch(startTimerById(id));
  };

  const stopTimer = () => {
    dispatch(stopTimerById(id));
  };

  const resetTimer = () => {
    dispatch(resetTimerById(id));
  };

  useEffect(() => {
    if (isActive) {
      const intervalIdTemp = setInterval(() => {
        dispatch(decreaseTimerById(id));
      }, 1000);
      dispatch(saveIntervalId(id, intervalIdTemp));
    } else {
      clearInterval(intervalId);
      dispatch(deleteIntervalId(id));
    }
  }, [isActive]);

  return (
    <div className="timer">
      <IconButton
        className="timer__deleteButton"
        aria-label="add"
        onClick={() => navigate(`/lists/${listId}/timers/${id}/delete`)}
      >
        <Clear className="timer__deleteButton-icon" />
      </IconButton>
      {editname ? (
        <div className="timer__name--edit">
          <TextField id="standard-basic" label={name} variant="standard" />
        </div>
      ) : (
        <div className="timer__name">
          <span onDoubleClick={test}>{name}</span>
          <button type="button" onClick={() => navigate(`/lists/${listId}/timers/${id}/edit`)}>
            <EditIcon />
          </button>
        </div>
      )}
      <div className="timer__commands">
        <span>
          {hours}
          :
          {minutes}
          :
          {seconds}
        </span>
        {isActive ? (
          <button type="button" onClick={stopTimer}>Stop</button>
        ) : (
          <button type="button" onClick={startTimer}>Start</button>
        )}
        {(!isActive && currentDelay !== delay) ? (
          <button type="button" onClick={resetTimer}>Reset</button>
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
