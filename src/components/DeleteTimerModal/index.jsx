import React, { useEffect } from 'react';
import { Button } from '@mui/material';

// import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { resetStatesDeleteTimerModal, setStateDeleteTimerModal } from '../../actions/deleteTimerModal';
import { fetchDeleteTimer } from '../../actions/user';
import Modal from '../Modal';
import Timer from '../Timer';

function DeleteTimerModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const listId = Number(params.listId);
  const timerId = Number(params.timerId);

  const { lists } = useSelector((state) => state.userReducer);
  const {
    selectedTimer,
    responseMessage,
    loading,
  } = useSelector((state) => state.deleteTimerModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateDeleteTimerModal(state, value));
  };

  useEffect(() => {
    if (lists) {
      const listFound = lists.find((list) => list.id === listId);
      const timerFound = listFound.timers.find((timer) => timer.id === timerId);
      handleSetState('selectedTimer', timerFound);
    }
  }, [lists]);

  useEffect(() => {
    handleSetState('selectedListId', listId);
  }, []);

  const handleSubmitDelete = (event) => {
    event.preventDefault();
    dispatch(fetchDeleteTimer(navigate));
  };

  useEffect(() => () => {
    dispatch(resetStatesDeleteTimerModal());
  }, []);

  return (
    <Modal
      closeButtonPath="/"
      title="Are you sure you want to delete this timer ?"
    >
      <form className="modal__content-body-form" onSubmit={handleSubmitDelete}>
        <div className="modal__content-body-form-fields">
          {selectedTimer && (
            <Timer
              id={selectedTimer.id}
              name={selectedTimer.name}
              delay={selectedTimer.delay}
              currentDelay={selectedTimer.currentDelay}
              isActive={selectedTimer.isActive}
              intervalId={selectedTimer.intervalId}
              listId={listId}
              dontShowControl
            />
          )}
        </div>
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

DeleteTimerModal.propTypes = {

};

export default DeleteTimerModal;
