export const SELECT_TIMER = 'SELECT_TIMER';
export const selectTimer = (timer) => ({
  type: SELECT_TIMER,
  timer,
});

export const SELECT_LIST_ID = 'SELECT_LIST_ID';
export const selectListId = (listId) => ({
  type: SELECT_LIST_ID,
  listId,
});
