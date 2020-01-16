const DEFAULT_STATE = {
  searchTerm: '',
};

// action is an object:
// {
//   type: string,
//   payload: string/number/Boolean/Object
//   error: Error,
//   metadata: Object,
// }

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch  (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
