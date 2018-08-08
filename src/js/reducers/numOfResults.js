const numOfResults = (state=0, action) => {
  if (action.type === "SET_NUM_OF_RESULTS"){
    return action.number;
  }
  return state;
}

export default numOfResults;
