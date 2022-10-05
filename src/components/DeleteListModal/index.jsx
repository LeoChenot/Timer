import React, { useEffect } from 'react';
import { Button } from '@mui/material';

// import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { resetStatesDeleteListModal, setStateDeleteListModal } from '../../actions/deleteListModal';
import { fetchDeleteList } from '../../actions/user';
import Modal from '../Modal';

function DeleteListModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const listId = Number(params.listId);

  const { loading, responseMessage } = useSelector((state) => state.deleteListModalReducer);

  useEffect(() => {
    dispatch(setStateDeleteListModal('selectedListId', listId));
  }, []);

  const handleSubmitDelete = (event) => {
    event.preventDefault();
    dispatch(fetchDeleteList(navigate));
  };

  useEffect(() => () => {
    dispatch(resetStatesDeleteListModal());
  }, []);

  return (
    <Modal
      closeButtonPath="/"
      title="Are you sure you want to delete this list ?"
    >
      <form className="modal__content-body-form" onSubmit={handleSubmitDelete}>
        <div className="modal__content-body-form-submit">
          <div className="modal__content-body-form-submit-group">
            <Button className="modal__content-body-form-submit-group-button" variant="contained" onClick={() => navigate('/')}>No</Button>
            {loading ? (
              <LoadingButton className="modal__content-body-form-submit-group-button" loading variant="contained">Yes</LoadingButton>
            ) : (
              <Button className="modal__content-body-form-submit-group-button" variant="contained" type="submit">Yes</Button>
            )}
          </div>
          <p className="modal__content-body-form-submit-responseText" style={{ maxHeight: responseMessage !== '' ? '1.5rem' : '0' }}>{responseMessage}</p>
        </div>
      </form>
    </Modal>
  );
}

DeleteListModal.propTypes = {

};

export default DeleteListModal;
