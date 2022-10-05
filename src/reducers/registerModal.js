import { RESET_STATES_REGISTER_MODAL, SET_STATE_REGISTER_MODAL, TOGGLE_STATE_REGISTER_MODAL } from '../actions/registerModal';

const initialState = {
  email: '',
  password1: '',
  password2: '',
  emailHelperText: ' ',
  password1HelperText: ' ',
  password2HelperText: ' ',
  showPassword1: false,
  showPassword2: false,
  responseMessage: '',
  loading: false,
};

const registerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_REGISTER_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case TOGGLE_STATE_REGISTER_MODAL: {
      return {
        ...state,
        [action.state]: !state[action.state],
      };
    }
    case RESET_STATES_REGISTER_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default registerModalReducer;
