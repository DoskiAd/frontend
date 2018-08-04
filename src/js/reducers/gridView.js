const gridView = (state=true, action) => {
  if(action.type === "TOGGLE_GRID"){
    return !state;
  }
  return state;
}

export default gridView;
