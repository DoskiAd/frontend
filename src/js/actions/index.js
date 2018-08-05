export const toggleGrid = () => {
  return {type: "TOGGLE_GRID"};
}

export const setPaginationBlock = (num) => {
  return {type: "SET_PAGIN_BLOCK", block: num};
}
