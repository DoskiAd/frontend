const favoriteIds = (state=[], action) => {
  if(action.type === "SET_FAV_IDS"){
    return action.favIds;
  }
  if(action.type === "CLEAR_FAV_IDS"){
    return [];
  }
  return state;
}

export default favoriteIds;
