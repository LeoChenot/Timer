// eslint-disable-next-line no-unused-vars
import { Add, Clear } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer';

// import PropTypes from 'prop-types';
import './style.scss';

function HomeConnected() {
  const navigate = useNavigate();

  const { lists } = useSelector((state) => state.userReducer);

  const handleMouseEnterCreateButton = (listId) => {
    const createButton = document.querySelector(`#createButton${listId}`);
    createButton.classList.add('home__connected-list-body-timerContainer-createButtonContainer-createButton--hover');
  };

  const handleMouseLeaveCreateButton = (listId) => {
    const createButton = document.querySelector(`#createButton${listId}`);
    createButton.classList.remove('home__connected-list-body-timerContainer-createButtonContainer-createButton--hover');
  };

  const handleFocusInCreateButton = (listId) => {
    const createButton = document.querySelector(`#createButton${listId}`);
    createButton.classList.add('home__connected-list-body-timerContainer-createButtonContainer-createButton--active');
  };

  const handleFocusOutCreateButton = (listId) => {
    const createButton = document.querySelector(`#createButton${listId}`);
    createButton.classList.remove('home__connected-list-body-timerContainer-createButtonContainer-createButton--active');
  };

  return (
    <div className="home__connected">
      <Button
        variant="contained"
        onClick={() => navigate('/lists/create')}
      >
        New List
      </Button>
      {lists && lists.map((list) => (
        <div className="home__connected-list" key={list.id}>
          <div className="home__connected-list-header">
            <h3 className="home__connected-list-header-name">{list.name}</h3>
            <IconButton
              className="home__connected-list-header-deleteButton"
              aria-label="add"
              onClick={() => navigate(`/lists/${list.id}/delete`)}
            >
              <Clear className="home__connected-list-header-deleteButton-icon" />
            </IconButton>
          </div>
          <div className="home__connected-list-body">
            <div className="home__connected-list-body-timerContainer">
              {list.timers.map((timer) => (
                <Timer
                  key={timer.id}
                  id={timer.id}
                  name={timer.name}
                  delay={timer.delay}
                  currentDelay={timer.currentDelay}
                  isActive={timer.isActive}
                  intervalId={timer.intervalId}
                  listId={list.id}
                />
              ))}
              <button
                className="home__connected-list-body-timerContainer-createButtonContainer"
                type="button"
                onMouseEnter={() => handleMouseEnterCreateButton(list.id)}
                onMouseLeave={() => handleMouseLeaveCreateButton(list.id)}
                onFocus={() => handleFocusInCreateButton(list.id)}
                onBlur={() => handleFocusOutCreateButton(list.id)}
                onClick={() => navigate(`/lists/${list.id}/timers/create`)}
              >
                <div
                  id={`createButton${list.id}`}
                  className="home__connected-list-body-timerContainer-createButtonContainer-createButton"
                  aria-label="add"
                >
                  <Add className="home__connected-list-body-timerContainer-createButtonContainer-createButton-icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

HomeConnected.propTypes = {

};

export default HomeConnected;
