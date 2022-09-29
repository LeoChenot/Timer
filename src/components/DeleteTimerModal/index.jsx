import React, { useEffect } from 'react';
import {
  Button,
  FormControl,
  IconButton,
} from '@mui/material';

// import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectListId, selectTimer } from '../../actions/deleteTimerModal';
import TimerDemo from '../TimerDemo';
import { fetchDeleteTimer } from '../../actions/user';

function DeleteTimerModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const listId = Number(params.listId);
  const timerId = Number(params.timerId);

  const { timerLists } = useSelector((state) => state.userReducer);
  const { selectedTimer } = useSelector((state) => state.deleteTimerModalReducer);

  useEffect(() => {
    if (timerLists) {
      const listFound = timerLists.find((list) => list.id === listId);
      const timerFound = listFound.timers.find((timer) => timer.id === timerId);
      dispatch(selectTimer(timerFound));
    }
  }, [timerLists]);

  useEffect(() => {
    dispatch(selectListId(listId));
  }, []);

  const handleSubmitDelete = (event) => {
    event.preventDefault();
    dispatch(fetchDeleteTimer());
    navigate('/');
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate('/')}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Are you sure you want to delete this timer ?</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {selectedTimer && (
            <TimerDemo
              id={selectedTimer.id}
              name={selectedTimer.name}
              delay={selectedTimer.delay}
              currentDelay={selectedTimer.currentDelay}
              isActive={selectedTimer.isActive}
              intervalId={selectedTimer.intervalId}
            />
          )}
        </div>
        <form className="modal__content-form" onSubmit={handleSubmitDelete}>
          <FormControl style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '1rem',
          }}
          >
            <Button variant="contained" onClick={() => navigate('/')}>No</Button>
            <Button variant="contained" type="submit">Yes</Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

DeleteTimerModal.propTypes = {

};

export default DeleteTimerModal;
