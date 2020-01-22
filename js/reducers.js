// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM } from "./actions";

// action is an object:
// {
//   type: string,
//   payload: string/number/Boolean/Object
//   error: Error,
//   metadata: Object,
// }

const searchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
