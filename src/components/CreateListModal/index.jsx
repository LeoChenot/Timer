import React, { useEffect, useRef } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { resetStatesCreateListModal, setStateCreateListModal } from '../../actions/createListModal';
import { fetchCreateList } from '../../actions/user';
import Modal from '../Modal';

function CreateListModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameInput = useRef();

  const {
    name,
    nameHelperText,
    responseMessage,
    loading,
  } = useSelector((state) => state.createListModalReducer);

  const handleSetState = (state, value) => {
    dispatch(setStateCreateListModal(state, value));
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    dispatch(fetchCreateList(navigate));
  };

  useEffect(() => {
    if (name.length === 0) {
      handleSetState('nameHelperText', 'Name must not be empty');
    }
    else {
      handleSetState('nameHelperText', '');
    }
  }, [name]);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(() => () => {
    dispatch(resetStatesCreateListModal());
  }, []);

  return (
    <Modal
      closeButtonPath="/"
      title="Create List"
    >
      <form className="modal__content-body-form" onSubmit={handleSubmitCreate}>
        <div className="modal__content-body-form-fields">
          <FormControl sx={{ '.MuiInputLabel-shrink': { color: nameHelperText === '' && '#00B800 !important' } }}>
            <TextField
              inputRef={nameInput}
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: nameHelperText === '' && '#00B800 !important' } }}
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(event) => handleSetState('name', event.target.value)}
              required
            />
            <FormHelperText className="modal__content-body-form-fields-helperText" style={{ maxHeight: nameHelperText !== '' ? '1.5rem' : '0' }}>{nameHelperText}</FormHelperText>
          </FormControl>
        </div>
        <div className="modal__content-body-form-submit">
          {loading ? (
            <LoadingButton className="modal__content-body-form-submit-button" loading variant="contained">Add</LoadingButton>
          ) : (
            <Button className="modal__content-body-form-submit-button" variant="contained" type="submit">Add</Button>
          )}
          <p className="modal__content-body-form-submit-responseText" style={{ maxHeight: responseMessage !== '' ? '1.5rem' : '0' }}>{responseMessage}</p>
        </div>
      </form>
    </Modal>
  );
}

CreateListModal.propTypes = {

};

export default CreateListModal;
