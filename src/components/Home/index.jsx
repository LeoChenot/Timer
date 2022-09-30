import { Button, IconButton } from '@mui/material';
import { Add, Clear } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Outlet, useNavigate,
} from 'react-router-dom';
import Timer from '../Timer';

// import PropTypes from 'prop-types';
import './style.scss';
import TimerDemo from '../TimerDemo';
import { fetchReadLists } from '../../actions/user';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lists } = useSelector((state) => state.userReducer);
  const { auth } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (auth) {
      dispatch(fetchReadLists());
    }
  }, [auth]);

  return (
    <div className="home">
      {!auth ? (
        <div>
          <h1>Bienvenue sur Timers</h1>
          <TimerDemo
            id={1}
            name="Coquillettes"
            delay={480}
            currentDelay={480}
            isActive={false}
            intervalId={null}
          />
          <p>Veuillez vous connecter pour avoir accès au site</p>
        </div>
      ) : (
        <div className="home__connected">
          <h2>Timers :</h2>
          <Button
            variant="contained"
            onClick={() => { navigate('/lists/create'); }}
          >
            New List

          </Button>
          {lists !== undefined && lists.map((list) => (
            <div className="main__timersList" key={list.id}>
              <IconButton
                className="timer__deleteButton"
                aria-label="add"
                onClick={() => navigate(`/lists/${list.id}/delete`)}
              >
                <Clear className="timer__deleteButton-icon" />
              </IconButton>
              <h3>{list.name}</h3>
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
              <IconButton
                className="home__connected-yolobutton"
                aria-label="add"
                onClick={() => { navigate(`/lists/${list.id}/timers/create`); }}
              >
                <Add className="home__connected-yolobutton-icon" />
              </IconButton>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}

Home.propTypes = {

};

export default Home;
