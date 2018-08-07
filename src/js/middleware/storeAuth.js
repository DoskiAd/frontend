const storeAuth = ({getState}) => (next) => (action) => {
  let result = next(action);

  if(action.type == "LOGIN"||action.type == "LOGOUT"){
    localStorage.setItem("auth", JSON.stringify(getState().auth));
  }

  return result;
}

export default storeAuth;
