const categories = (state=[], action) => {
  if (action.type === "SET_CATEGORIES"){
    return action.categories;
  }
  return state;
}

export default categories;
