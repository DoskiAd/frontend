const defaultState = {
  isLoggedIn: false,
  email: null,
  name: null,
  token: null,
  isAuthenticating: false
}

const auth = (state=defaultState, action) => {
  if(action.type === "LOGIN"){
    return {
      isLoggedIn: true,
      email: action.email,
      name: action.name,
      token: action.token,
      isAuthenticating: false
    };
  }

  if(action.type === "LOGOUT"){
    return defaultState;
  }

  if(action.type === "AUTH_IN_PROGRESS"){
    return {...defaultState, isAuthenticating: true};
  }

  return state;
}

export default auth;
