const categoryFilter = (state=null, action) => {
  if(action.type === "SET_CATEGORY_FILTER"){
    return action.categoryId;
  }
  return state;
}

export default categoryFilter;
