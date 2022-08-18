export const SET_NEW_EMAIL_VALUE = 'SET_NEW_EMAIL_VALUE';
export const setNewEmailValue = (newEmailValue) => ({
  type: SET_NEW_EMAIL_VALUE,
  newEmailValue,
});

export const SET_NEW_PASSWORD_VALUE = 'SET_NEW_PASSWORD_VALUE';
export const setNewPasswordValue = (newPasswordValue) => ({
  type: SET_NEW_PASSWORD_VALUE,
  newPasswordValue,
});

export const CHANGE_SHOW_PASSWORD = 'CHANGE_SHOW_PASSWORD';
export const changeShowPassword = () => ({
  type: CHANGE_SHOW_PASSWORD,
});
