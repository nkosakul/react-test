// @flow

import { SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
  searchTerm: ""
};

// action is an object:
// {
//   type: string,
//   payload: string/number/Boolean/Object
//   error: Error,
//   metadata: Object,
// }

const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
