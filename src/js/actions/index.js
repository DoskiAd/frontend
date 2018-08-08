export const toggleGrid = () => {
  return {type: "TOGGLE_GRID"};
}

export const setPaginationBlock = (num) => {
  return {type: "SET_PAGIN_BLOCK", block: num};
}

export const login = (email, name, token) => {
  return {
    type: "LOGIN",
    email: email,
    name: name,
    token: token
  };
}

export const logout = () => {
  return {type: "LOGOUT"};
}

export const clearRegStatus = () => {
  return {type: "CLEAR_REG_STATUS"};
}

export const clearLoginMsgs = () => {
  return {type: "CLEAR_LOGIN_MSGS"};
}

export const clearPassChangeStatus = () => {
  return {type: "CLEAR_PASSCHANGE_STATUS"};
}

export const clearConfirmaccMsgs = () => {
  return {type: "CLEAR_CONFIRMACC_MSGS"};
}

export const clearFavIds = () => {
  return {type: "CLEAR_FAV_IDS"};
}

export const setSearchOptions = (category, key, sortBy, order) => {
  return {
    type: "SET_SEARCH_OPT",
    options: {
      category: category,
      title: key,
      sortBy: sortBy,
      order: order
    }
  };
}
