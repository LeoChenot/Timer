import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';
import { setStateTimer } from '../../actions/user';

function TimerDemo({
  id, name, delay, currentDelay, isActive, listId,
}) {
  const dispatch = useDispatch();

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

  return (
    <div className="timer">
      <div className="timer__name">
        <span>{name}</span>
        <button type="button">
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

TimerDemo.defaultProps = {
  listId: undefined,
};

TimerDemo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  currentDelay: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  listId: PropTypes.number,
};

export default TimerDemo;
