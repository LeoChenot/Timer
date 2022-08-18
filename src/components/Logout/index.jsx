import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.userReducer);

  const logoutFunction = () => {
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    if (!auth) {
      navigate('/');
      console.log('bonjour');
    }
  }, [auth]);

  useEffect(() => {
    logoutFunction();
  }, []);

  return (
    <div className="logout">
      Logout
    </div>
  );
}

Logout.propTypes = {

};

export default Logout;
