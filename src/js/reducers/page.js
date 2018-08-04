const page = (state=1, action) => {
  if(action.type === "SET_PAGE"){
    return action.page;
  }
  return state;
}

export default page;
