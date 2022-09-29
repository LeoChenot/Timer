import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { TextField } from '@mui/material';
import {
  resetTimerById,
  startTimerById,
  stopTimerById,
} from '../../actions/timers';

function TimerDemo({
  id, name, delay, currentDelay, isActive,
}) {
  const dispatch = useDispatch();

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

  return (
    <div className="timer">
      {editname ? (
        <div className="timer__name--edit">
          <TextField id="standard-basic" label={name} variant="standard" />
        </div>
      ) : (
        <div className="timer__name">
          <span onDoubleClick={test}>{name}</span>
          <button type="button">
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

TimerDemo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  currentDelay: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TimerDemo;
