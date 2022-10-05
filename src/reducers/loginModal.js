import { RESET_STATES_LOGIN_MODAL, SET_STATE_LOGIN_MODAL, TOGGLE_STATE_LOGIN_MODAL } from '../actions/loginModal';

const initialState = {
  email: '',
  password: '',
  emailHelperText: ' ',
  passwordHelperText: ' ',
  showPassword: false,
  responseMessage: '',
  loading: false,
};

const loginModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_LOGIN_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case TOGGLE_STATE_LOGIN_MODAL: {
      return {
        ...state,
        [action.state]: !state[action.state],
      };
    }
    case RESET_STATES_LOGIN_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default loginModalReducer;
