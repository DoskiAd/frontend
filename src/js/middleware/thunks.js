import {getCategories, getItems} from '../apiRequests';

export const fillCategories = () => {
  return (dispatch) => {
    getCategories().then((res) => {
      dispatch({
        type: "SET_CATEGORIES",
        categories: res
      });
    });
  }
}

export const fillItems = () => {
  return (dispatch, getState) => {
    getItems(
      getState().categoryFilter, getState().page
    ).then((res, text, req) => {
      dispatch({
        type: "SET_ITEMS",
        items: res
      });
      dispatch({
        type: "SET_NUM_OF_PAGES",
        number: req.getResponseHeader("totalPage")
      });
    });
  }
}
