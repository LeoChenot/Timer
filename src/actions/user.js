export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const saveUserData = (user) => ({
  type: SAVE_USER_DATA,
  user,
});

export const SAVE_LOGOUT = 'SAVE_LOGOUT';
export const saveLogout = () => ({
  type: SAVE_LOGOUT,
});

// ----------------------

export const FETCH_READ_TIMER_LISTS = 'FETCH_READ_TIMER_LISTS';
export const fetchReadTimerLists = () => ({
  type: FETCH_READ_TIMER_LISTS,
});

export const SAVE_NEW_TIMER_LISTS = 'SAVE_NEW_TIMER_LISTS';
export const saveNewTimerLists = (newTimerLists) => ({
  type: SAVE_NEW_TIMER_LISTS,
  newTimerLists,
});

// ----------------------
// CRUD List

export const FETCH_CREATE_LIST = 'FETCH_CREATE_LIST';
export const fetchCreateList = () => ({
  type: FETCH_CREATE_LIST,
});

export const FETCH_DELETE_LIST = 'FETCH_DELETE_LIST';
export const fetchDeleteList = () => ({
  type: FETCH_DELETE_LIST,
});

// ----------------------
// CRUD Timer

export const FETCH_CREATE_TIMER = 'FETCH_CREATE_TIMER';
export const fetchCreateTimer = () => ({
  type: FETCH_CREATE_TIMER,
});

export const FETCH_UPDATE_TIMER = 'FETCH_UPDATE_TIMER';
export const fetchUpdateTimer = () => ({
  type: FETCH_UPDATE_TIMER,
});

export const FETCH_DELETE_TIMER = 'FETCH_DELETE_TIMER';
export const fetchDeleteTimer = () => ({
  type: FETCH_DELETE_TIMER,
});
