const currentItem = (state=null, action) => {
  if(action.type === "SET_CURRENT_ITEM"){
    return action.item;
  }
  return state;
}

export default currentItem;
