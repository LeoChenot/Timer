import { SELECT_LIST_ID } from '../actions/deleteListModal';

const initialState = {
  selectedListId: undefined,
};

const deleteListModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_LIST_ID: {
      return {
        ...state,
        selectedListId: action.listId,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default deleteListModalReducer;
