export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const saveUserData = (user) => ({
  type: SAVE_USER_DATA,
  user,
});

export const SAVE_LOGOUT = 'SAVE_LOGOUT';
export const saveLogout = () => ({
  type: SAVE_LOGOUT,
});
