const defaultState = {
  isDone: false,
  isInProgress: false,
  error: null
}

const register = (state=defaultState, action) => {
  if(action.type === "SET_REG_DONE"){
    return {...defaultState, isDone: true};
  }

  if(action.type === "SET_REG_IN_PROGRESS"){
    return {...defaultState, isInProgress: true};
  }

  if(action.type === "SET_REG_FAIL"){
    return {...defaultState, error: action.error};
  }

  if(action.type === "CLEAR_REG_STATUS"){
    return defaultState;
  }

  return state;
}

export default register;
