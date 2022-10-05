import { LoadingButton } from '@mui/lab';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/user';
import Modal from '../Modal';

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
    <Modal
      title="Logout"
    >
      <LoadingButton loading variant="contained">Logout</LoadingButton>
    </Modal>
  );
}

LogoutModal.propTypes = {

};

export default LogoutModal;
