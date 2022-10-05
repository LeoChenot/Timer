import { RESET_STATES_CREATE_LIST_MODAL, SET_STATE_CREATE_LIST_MODAL } from '../actions/createListModal';

const initialState = {
  name: '',
  nameHelperText: ' ',
  responseMessage: '',
  loading: false,
};

const createListModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_CREATE_LIST_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case RESET_STATES_CREATE_LIST_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default createListModalReducer;
