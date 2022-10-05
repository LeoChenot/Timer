/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { hideAllModals, setStateModal } from '../../actions/modals';
import { logout } from '../../actions/user';
import CreateListModal from '../CreateListModal';
import CreateTimerModal from '../CreateTimerModal';
import DeleteListModal from '../DeleteListModal';
import DeleteTimerModal from '../DeleteTimerModal';
import EditTimerModal from '../EditTimerModal';
import Error404 from '../Error404';
import Home from '../Home';
import LoginModal from '../LoginModal';
import LogoutModal from '../LogoutModal';
import Profile from '../Profile';
import RegisterModal from '../RegisterModal';

// import PropTypes from 'prop-types';
import './style.scss';

function Main() {
  const dispatch = useDispatch();

  const { search } = useLocation();

  useEffect(() => {
    dispatch(hideAllModals());
    if (search === '?login') {
      dispatch(setStateModal('loginModal', true));
    } else if (search === '?register') {
      dispatch(setStateModal('registerModal', true));
    } else if (search === '?logout') {
      dispatch(setStateModal('logoutModal', true));
    }
  }, [search]);

  const { loginModal, registerModal, logoutModal } = useSelector((state) => state.modalsReducer);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/timer/edit" element={<EditTimerModal timerExpo />} />

          <Route path="/lists/create" element={<CreateListModal />} />
          <Route path="/lists/:listId/delete" element={<DeleteListModal />} />
          <Route path="/lists/:listId/timers/create" element={<CreateTimerModal />} />
          <Route path="/lists/:listId/timers/:timerId/edit" element={<EditTimerModal />} />
          <Route path="/lists/:listId/timers/:timerId/delete" element={<DeleteTimerModal />} />
        </Route>
        <Route path="/error" element={<Error404 />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<Navigate to="/error" />} /> */}
      </Routes>
      {loginModal && (
        <LoginModal />
      )}
      {registerModal && (
        <RegisterModal />
      )}
      {logoutModal && (
        <LogoutModal />
      )}
    </main>
  );
}

Main.propTypes = {

};

export default Main;
