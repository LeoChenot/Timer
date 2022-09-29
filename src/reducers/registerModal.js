import {
  SET_NEW_STRING,
  TOGGLE_BOOLEAN,
} from '../actions/registerModal';

const initialState = {
  email: '',
  password1: '',
  password2: '',
  emailHelperText: '',
  password1HelperText: '',
  password2HelperText: '',
  showPassword1: false,
  showPassword2: false,
};

const registerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STRING: {
      return {
        ...state,
        [action.state]: action.newString,
      };
    }
    case TOGGLE_BOOLEAN: {
      return {
        ...state,
        [action.state]: !state[action.state],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default registerModalReducer;
