import {
  CHANGE_SHOW_PASSWORD,
  SET_NEW_EMAIL_VALUE,
  SET_NEW_PASSWORD_VALUE,
} from '../actions/loginModal';

const initialState = {
  emailValue: '',
  passwordValue: '',
  showPassword: false,
};

const loginModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_EMAIL_VALUE: {
      return {
        ...state,
        emailValue: action.newEmailValue,
      };
    }
    case SET_NEW_PASSWORD_VALUE: {
      return {
        ...state,
        passwordValue: action.newPasswordValue,
      };
    }
    case CHANGE_SHOW_PASSWORD: {
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default loginModalReducer;
