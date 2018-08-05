import {getCategories, getItems, getItemById} from '../apiRequests';
import {getByKeyVal} from '../helpers.js';

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

export const setItemsByPage = (page) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_PAGE", page: page
    });
    getItems(
      getState().categoryFilter, page
    ).then((res, text, req) => {
      dispatch({
        type: "SET_ITEMS",
        items: res
      });
      dispatch({
        type: "SET_NUM_OF_PAGES",
        number: parseInt(req.getResponseHeader("totalPage")) > 0?
            req.getResponseHeader("totalPage"): 1
      });
    });
  }
}

export const setItemsByCategory = (category) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CATEGORY_FILTER", categoryId: category
    });
    dispatch(setItemsByPage(1));
  }
}

export const fillItems = () => {
  return (dispatch) => {
    dispatch(setItemsByCategory(null));
  }
}

export const setCurrentItemById = (id) => {
  return (dispatch, getState) => {
    let item = getByKeyVal(getState().items, id, "id");
    if(item !== null){
      dispatch({
        type: "SET_CURRENT_ITEM",
        item: item
      });
    } else {
      getItemById(id).then((res) => {
        dispatch({
          type: "SET_CURRENT_ITEM",
          item: res
        })
      });
    }
  }
}
