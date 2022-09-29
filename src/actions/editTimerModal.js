export const SET_NEW_STRING = 'SET_NEW_STRING';
export const setNewString = (state, newString) => ({
  type: SET_NEW_STRING,
  state,
  newString,
});

export const SELECT_LIST_ID = 'SELECT_LIST_ID';
export const selectListId = (listId) => ({
  type: SELECT_LIST_ID,
  listId,
});

export const SELECT_TIMER = 'SELECT_TIMER';
export const selectTimer = (timer) => ({
  type: SELECT_TIMER,
  timer,
});

export const SET_NEW_DELAY = 'SET_NEW_DELAY';
export const setNewDelay = (newDelay) => ({
  type: SET_NEW_DELAY,
  newDelay,
});
