const defaultState = {info: null, err: null};

const loginMsgs = (state=defaultState, action) => {
  if(action.type === "ADD_LOGIN_INFO"){
    return {...state, info: action.msg}
  }

  if(action.type === "ADD_LOGIN_ERR"){
    return {...state, err: action.msg}
  }

  if(action.type === "CLEAR_LOGIN_MSGS"){
    return defaultState;
  }

  return state;
}

export default loginMsgs;
