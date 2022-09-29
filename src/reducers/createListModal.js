import { SET_NEW_STRING } from '../actions/createListModal';

const initialState = {
  name: '',
};

const createListModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STRING: {
      return {
        ...state,
        [action.state]: action.newString,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default createListModalReducer;
