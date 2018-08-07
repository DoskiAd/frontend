const defaultState={errorMsg: null, successMsg: null}

const confirmAcc = (state=defaultState, action) => {
  if(action.type === "SET_CONFIRMACC_ERR_MSG"){
    return {...state, errorMsg: action.msg}
  }

  if(action.type === "SET_CONFIRMACC_SUCCESS_MSG"){
    return {...state, successMsg: action.msg}
  }

  if(action.type === "CLEAR_CONFIRMACC_MSGS"){
    return defaultState;
  }

  return state;
}

export default confirmAcc;
