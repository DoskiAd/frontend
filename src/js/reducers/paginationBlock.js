const paginationBlock = (state={current: 0, pagesPerBlock: 20}, action) => {
  if(action.type === "SET_PAGIN_BLOCK"){
    return {...state, current: action.block}
  }
  return state;
}

export default paginationBlock;
