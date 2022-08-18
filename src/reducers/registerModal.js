import {
  CHANGE_SHOW_PASSWORD_1,
  CHANGE_SHOW_PASSWORD_2,
  SET_NEW_EMAIL_VALUE,
  SET_NEW_PASSWORD_1_VALUE,
  SET_NEW_PASSWORD_2_VALUE,
} from '../actions/registerModal';

const initialState = {
  emailValue: '',
  password1Value: '',
  password2Value: '',
  showPassword1: false,
  showPassword2: false,
};

const registerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_EMAIL_VALUE: {
      return {
        ...state,
        emailValue: action.newEmailValue,
      };
    }
    case SET_NEW_PASSWORD_1_VALUE: {
      return {
        ...state,
        password1Value: action.newPassword1Value,
      };
    }
    case SET_NEW_PASSWORD_2_VALUE: {
      return {
        ...state,
        password2Value: action.newPassword2Value,
      };
    }
    case CHANGE_SHOW_PASSWORD_1: {
      return {
        ...state,
        showPassword1: !state.showPassword1,
      };
    }
    case CHANGE_SHOW_PASSWORD_2: {
      return {
        ...state,
        showPassword2: !state.showPassword2,
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
