export const SET_NEW_EMAIL_VALUE = 'SET_NEW_EMAIL_VALUE';
export const setNewEmailValue = (newEmailValue) => ({
  type: SET_NEW_EMAIL_VALUE,
  newEmailValue,
});

export const SET_NEW_PASSWORD_1_VALUE = 'SET_NEW_PASSWORD_1_VALUE';
export const setNewPassword1Value = (newPassword1Value) => ({
  type: SET_NEW_PASSWORD_1_VALUE,
  newPassword1Value,
});

export const SET_NEW_PASSWORD_2_VALUE = 'SET_NEW_PASSWORD_2_VALUE';
export const setNewPassword2Value = (newPassword2Value) => ({
  type: SET_NEW_PASSWORD_2_VALUE,
  newPassword2Value,
});

export const CHANGE_SHOW_PASSWORD_1 = 'CHANGE_SHOW_PASSWORD_1';
export const changeShowPassword1 = () => ({
  type: CHANGE_SHOW_PASSWORD_1,
});

export const CHANGE_SHOW_PASSWORD_2 = 'CHANGE_SHOW_PASSWORD_2';
export const changeShowPassword2 = () => ({
  type: CHANGE_SHOW_PASSWORD_2,
});
