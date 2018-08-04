const numOfPages = (state=1, action) => {
  if(action.type === "SET_NUM_OF_PAGES"){
    return action.number;
  }
  return state;
}

export default numOfPages;
