const defaultState = {
  category: null,
  title: null,
  sortBy: null,
  order: null
};

const searchOptions = (state=defaultState, action) => {
  if(action.type === "SET_SEARCH_OPT"){
    return action.options;
  }
  return state;
}

export default searchOptions;
