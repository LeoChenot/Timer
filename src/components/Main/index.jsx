/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import { hideAllModals, showLoginModal, showRegisterModal } from '../../actions/modals';
import CreateListModal from '../CreateListModal';
import CreateTimerModal from '../CreateTimerModal';
import DeleteListModal from '../DeleteListModal';
import DeleteTimerModal from '../DeleteTimerModal';
import EditTimerModal from '../EditTimerModal';
import Error404 from '../Error404';
import Home from '../Home';
import LoginModal from '../LoginModal';
import Logout from '../Logout';
import Profile from '../Profile';
import RegisterModal from '../RegisterModal';
// import { fetchReadTimer } from '../../actions/timers';

// import PropTypes from 'prop-types';
import './style.scss';

function Main() {
  const dispatch = useDispatch();

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

  const { loginModal, registerModal } = useSelector((state) => state.modalsReducer);

  // useEffect(() => {
  //   timerListResponse.forEach((timer) => {
  //     console.log(`${timer.id}: isActive -> ${timer.isActive}`);
  //   });
  // }, [timerListResponse]);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/lists/create" element={<CreateListModal />} />
          <Route path="/lists/:listId/delete" element={<DeleteListModal />} />
          <Route path="/lists/:listId/timers/create" element={<CreateTimerModal />} />
          <Route path="/lists/:listId/timers/:timerId/edit" element={<EditTimerModal />} />
          <Route path="/lists/:listId/timers/:timerId/delete" element={<DeleteTimerModal />} />
        </Route>
        <Route path="/error" element={<Error404 />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<Navigate to="/error" />} /> */}
      </Routes>
      {/* {background && (
        <Routes>
          <Route path="modal" element={<CreateTimerModal />} />
        </Routes>
      )} */}
      {loginModal && (
        <LoginModal />
      )}
      {registerModal && (
        <RegisterModal />
      )}
    </main>
  );
}

Main.propTypes = {

};

export default Main;
