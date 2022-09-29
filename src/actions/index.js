export const SET_NEW_STRING = 'SET_NEW_STRING';
export const setNewString = (reducer, state, newString) => ({
  type: SET_NEW_STRING,
  reducer,
  state,
  newString,
});

export const SET_NEW_BOOLEAN = 'SET_NEW_BOOLEAN';
export const setNewBoolean = (state, newBoolean) => ({
  type: SET_NEW_BOOLEAN,
  state,
  newBoolean,
});
