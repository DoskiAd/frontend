const favoriteIds = (state=[], action) => {
  if(action.type === "SET_FAV_IDS"){
    return action.favIds;
  }
  return state;
}

export default favoriteIds;
