import { HIDE_ALL_MODALS, SHOW_LOGIN_MODAL, SHOW_REGISTER_MODAL } from '../actions/modals';

const initialState = {
  loginModal: false,
  registerModal: false,
};

const modalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LOGIN_MODAL: {
      return {
        ...state,
        loginModal: true,
      };
    }
    case SHOW_REGISTER_MODAL: {
      return {
        ...state,
        registerModal: true,
      };
    }
    case HIDE_ALL_MODALS: {
      return {
        ...state,
        loginModal: false,
        registerModal: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalsReducer;
