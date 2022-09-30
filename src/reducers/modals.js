import { HIDE_ALL_MODALS, SET_STATE_MODAL } from '../actions/modals';

const initialState = {
  loginModal: false,
  registerModal: false,
  logoutModal: false,
};

const modalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case HIDE_ALL_MODALS: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalsReducer;
