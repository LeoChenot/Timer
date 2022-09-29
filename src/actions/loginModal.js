export const SET_NEW_STRING = 'SET_NEW_STRING';
export const setNewString = (state, newString) => ({
  type: SET_NEW_STRING,
  state,
  newString,
});

export const SET_NEW_BOOLEAN = 'SET_NEW_BOOLEAN';
export const setNewBoolean = (state, newBoolean) => ({
  type: SET_NEW_BOOLEAN,
  state,
  newBoolean,
});

export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN';
export const toggleBoolean = (state) => ({
  type: TOGGLE_BOOLEAN,
  state,
});
