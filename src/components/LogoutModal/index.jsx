import { LoadingButton } from '@mui/lab';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/user';

function LogoutModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFunction = () => {
    dispatch(logout(navigate));
  };

  useEffect(() => {
    logoutFunction();
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__content-title">Logout</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LoadingButton loading variant="contained">Logout</LoadingButton>
        </div>
      </div>
    </div>
  );
}

LogoutModal.propTypes = {

};

export default LogoutModal;
