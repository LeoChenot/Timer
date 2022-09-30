import React, { useEffect } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
} from '@mui/material';

// import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { resetStatesDeleteListModal, setStateDeleteListModal } from '../../actions/deleteListModal';
import { fetchDeleteList } from '../../actions/user';

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
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate('/')}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Are you sure you want to delete this list ?</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          ...
        </div>
        <form className="modal__content-form" onSubmit={handleSubmitDelete}>
          <FormControl style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '1rem',
          }}
          >
            <Button variant="contained" onClick={() => navigate('/')}>No</Button>
            {loading ? (
              <LoadingButton loading variant="contained">Yes</LoadingButton>
            ) : (
              <Button variant="contained" type="submit">Yes</Button>
            )}
          </FormControl>
          <FormHelperText id="my-helper-text">{responseMessage}</FormHelperText>
        </form>
      </div>
    </div>
  );
}

DeleteListModal.propTypes = {

};

export default DeleteListModal;
