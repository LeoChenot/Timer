export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const saveUserData = (user) => ({
  type: SAVE_USER_DATA,
  user,
});
