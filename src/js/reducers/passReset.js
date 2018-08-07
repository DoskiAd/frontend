const defaultState = {
  isKeySent: false,
  errorMsg: null,
  successMsg: null
};

const passReset = (state=defaultState, action) => {
  if(action.type === "PASSCHANGE_KEY_IS_SENT"){
    return {
      ...defaultState,
      isKeySent: true,
      successMsg: "На указанный адрес был выслан код подтверждения. Введите его"
    };
  }

  if(action.type === "SET_PASSCHANGE_ERR_MSG"){
    return {
      ...state, errorMsg: action.msg
    };
  }

  if(action.type === "SET_PASSCHANGE_SUCCESS_MSG"){
    return {
      ...state, successMsg: action.msg
    };
  }

  if(action.type === "CLEAR_PASSCHANGE_STATUS"){
    return defaultState;
  }

  return state;
}

export default passReset;
