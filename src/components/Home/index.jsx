/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// import PropTypes from 'prop-types';
import './style.scss';
import { Button } from '@mui/material';
import { fetchReadLists } from '../../actions/user';
import HomeConnected from '../HomeConnected';
import Timer from '../Timer';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.userReducer);
  const { timer } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    if (auth) {
      dispatch(fetchReadLists());
    }
  }, [auth]);

  return (
    <div className="home">
      {!auth ? (
        <div className="home__container">
          <div className="home__container-header">
            <h1 className="home__container-header-title">Welcome on Timers</h1>
            <p className="home__container-header-description">
              Timers est un site permettant de créer des minuteurs, triés par liste
              <br />
              ...
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur quo distinctio quis debitis fuga nisi sed, molestias, error magnam aut illum obcaecati ut recusandae mollitia temporibus quisquam nemo. Eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque minima voluptate nemo odio quibusdam perferendis repellendus! Iste, eos sunt maxime iure fugiat, consectetur error totam ad officiis nihil atque odit.
            </p>
          </div>
          <div className="home__container-body">
            <p className="home__container-body-text">Example of Timer :</p>
            <Timer
              id={timer.id}
              name={timer.name}
              delay={timer.delay}
              currentDelay={timer.currentDelay}
              isActive={timer.isActive}
              intervalId={timer.intervalId}
              dontShowControl
              timerExpo
            />
          </div>
          <div className="home__container-footer">
            <p className="home__container-footer-text">Please Login to access all features</p>

            <div className="home__container-footer-buttonGroup">
              <Button
                variant="contained"
                onClick={() => navigate('/?login')}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/?register')}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <HomeConnected />
      )}
      <Outlet />
    </div>
  );
}

Home.propTypes = {

};

export default Home;
