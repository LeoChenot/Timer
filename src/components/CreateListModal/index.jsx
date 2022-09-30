import React, { useEffect, useRef } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import './style.scss';
import { Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { resetStatesCreateListModal, setStateCreateListModal } from '../../actions/createListModal';
import { fetchCreateList } from '../../actions/user';

function CreateListModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameInput = useRef();

  const { name, responseMessage, loading } = useSelector((state) => state.createListModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateCreateListModal(state, value));
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    dispatch(fetchCreateList(navigate));
  };

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(() => () => {
    dispatch(resetStatesCreateListModal());
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">
        <IconButton className="modal__content-closeButton" aria-label="add" onClick={() => navigate('/')}>
          <Clear className="modal__content-closeButton-icon" />
        </IconButton>
        <h2 className="modal__content-title">Create List</h2>
        <form className="modal__content-form" onSubmit={handleSubmitCreate}>
          <FormControl>
            <TextField
              inputRef={nameInput}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(event) => handleSetState('name', event.target.value)}
              required
            />
            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          {loading ? (
            <LoadingButton loading variant="contained">Add</LoadingButton>
          ) : (
            <Button variant="contained" type="submit">Add</Button>
          )}
          <FormHelperText id="my-helper-text">{responseMessage}</FormHelperText>
        </form>
      </div>
    </div>
  );
}

CreateListModal.propTypes = {

};

export default CreateListModal;
