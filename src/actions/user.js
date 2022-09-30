// ----------------------
// CRUD User

export const FETCH_CREATE_USER = 'FETCH_CREATE_USER';
export const fetchCreateUser = (navigate, pathname) => ({
  type: FETCH_CREATE_USER,
  navigate,
  pathname,
});

export const FETCH_READ_USER = 'FETCH_READ_USER';
export const fetchReadUser = (navigate, pathname) => ({
  type: FETCH_READ_USER,
  navigate,
  pathname,
});

export const FETCH_READ_USER_WITH_TOKEN = 'FETCH_READ_USER_WITH_TOKEN';
export const fetchReadUserWithToken = () => ({
  type: FETCH_READ_USER_WITH_TOKEN,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const LOGOUT = 'LOGOUT';
export const logout = (navigate) => ({
  type: LOGOUT,
  navigate,
});

export const SAVE_LOGOUT = 'SAVE_LOGOUT';
export const saveLogout = () => ({
  type: SAVE_LOGOUT,
});

// ----------------------
// CRUD List

export const FETCH_CREATE_LIST = 'FETCH_CREATE_LIST';
export const fetchCreateList = (navigate) => ({
  type: FETCH_CREATE_LIST,
  navigate,
});

export const FETCH_READ_LISTS = 'FETCH_READ_LISTS';
export const fetchReadLists = () => ({
  type: FETCH_READ_LISTS,
});

export const SAVE_LISTS = 'SAVE_LISTS';
export const saveLists = (lists) => ({
  type: SAVE_LISTS,
  lists,
});

export const FETCH_DELETE_LIST = 'FETCH_DELETE_LIST';
export const fetchDeleteList = (navigate) => ({
  type: FETCH_DELETE_LIST,
  navigate,
});

// ----------------------
// CRUD Timer

export const FETCH_CREATE_TIMER = 'FETCH_CREATE_TIMER';
export const fetchCreateTimer = (navigate) => ({
  type: FETCH_CREATE_TIMER,
  navigate,
});

export const FETCH_UPDATE_TIMER = 'FETCH_UPDATE_TIMER';
export const fetchUpdateTimer = (navigate) => ({
  type: FETCH_UPDATE_TIMER,
  navigate,
});

export const FETCH_DELETE_TIMER = 'FETCH_DELETE_TIMER';
export const fetchDeleteTimer = (navigate) => ({
  type: FETCH_DELETE_TIMER,
  navigate,
});

// ----------------------
// Control Timer

export const SET_STATE_TIMER = 'SET_STATE_TIMER';
export const setStateTimer = (listId, timerId, state, value) => ({
  type: SET_STATE_TIMER,
  listId,
  timerId,
  state,
  value,
});
