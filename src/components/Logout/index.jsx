import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFunction = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

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
