import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes, Route, useLocation, useSearchParams,
} from 'react-router-dom';
import { hideAllModals, showLoginModal, showRegisterModal } from '../../actions/modals';
import LoginModal from '../LoginModal';
import Logout from '../Logout';
import RegisterModal from '../RegisterModal';
// import { fetchReadTimer } from '../../actions/timers';
import Timer from '../Timer';

// import PropTypes from 'prop-types';
import './style.scss';

function Main() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(fetchReadTimer());
  // }, []);

  const { search } = useLocation();

  useEffect(() => {
    dispatch(hideAllModals());
    if (search === '?login') {
      dispatch(showLoginModal());
    } else if (search === '?register') {
      dispatch(showRegisterModal());
    }
  }, [search]);

  const { timerListResponse } = useSelector((state) => state.timersReducer);
  const { auth } = useSelector((state) => state.userReducer);
  const { loginModal, registerModal } = useSelector((state) => state.modalsReducer);

  useEffect(() => {
    if (auth) {
      searchParams.delete(search.replace('?', ''));
      setSearchParams(searchParams);
    }
  }, [search]);

  // useEffect(() => {
  //   timerListResponse.forEach((timer) => {
  //     console.log(`${timer.id}: isActive -> ${timer.isActive}`);
  //   });
  // }, [timerListResponse]);

  return (
    <main className="main">
      <Routes>
        <Route path="/logout" element={<Logout />} />
      </Routes>
      {!auth ? (
        <div>
          <h1>Bienvenue sur Timers</h1>
          <p>Veuillez vous connecter pour avoir accès au site</p>
          {loginModal && (
            <LoginModal />
          )}
          {registerModal && (
            <RegisterModal />
          )}
        </div>
      ) : (
        <div>
          <h2>Timers :</h2>
          <div className="main__timersList">
            {timerListResponse.map((timer) => (
              <Timer
                key={timer.id}
                id={timer.id}
                name={timer.name}
                delay={timer.delay}
                currentDelay={timer.currentDelay}
                isActive={timer.isActive}
                intervalId={timer.intervalId}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

Main.propTypes = {

};

export default Main;
