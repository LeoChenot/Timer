import { RESET_STATES_DELETE_LIST_MODAL, SET_STATE_DELETE_LIST_MODAL } from '../actions/deleteListModal';

const initialState = {
  selectedListId: undefined,
  responseMessage: '',
  loading: false,
};

const deleteListModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_DELETE_LIST_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case RESET_STATES_DELETE_LIST_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default deleteListModalReducer;
