import {
  getCategories,
  getItems,
  getItemById,
  regiserUser,
  logUserIn,
  sendAdData,
  sendAdPhotos,
  reqPassChangeKey,
  sendNewPassword,
  reqAccountConfirm
} from '../apiRequests';
import {login, logout} from '../actions/index.js';
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

export const registration = (name, email, password, confirm) => {
  return (dispatch) => {
    dispatch({type: "SET_REG_IN_PROGRESS"});
    regiserUser(name, email, password, confirm).then(
      (resp) => {
        dispatch({type: "SET_REG_DONE"});
      },
      (resp) => {
        console.log(JSON.stringify(resp));
        dispatch({type: "SET_REG_FAIL", error: resp.responseText});
      }
    );
  }
}

export const authentication = (email, password) => {
  return (dispatch) => {
    dispatch({type: "AUTH_IN_PROGRESS"});
    logUserIn(email, password).then(
      (resp) => {
        dispatch(login(resp.email, resp.name, resp.value));
      },
      (resp, msg) => {
        dispatch(logout());
        dispatch({
          type: "ADD_LOGIN_ERR",
          msg: resp.responseText
        });
      }
    );
  }
}

export const postAd = (title, price, desc, loc, cat, phone, email, photos) => {
  return (dispatch, getState) => {
    sendAdData(
      getState().auth.token, title, price, desc, loc, cat, phone, email, photos
    ).then((resp) => {
        if(photos.length > 0){
          sendAdPhotos(getState().auth.token, photos, resp).fail(
            (resp) => console.log(JSON.stringify(resp))
          );
        }
        dispatch(fillItems());
      }, (resp) => console.log(JSON.stringify(resp)));
  }
}

export const passChangeAskKey = (email) => {
  return (dispatch) => {
    reqPassChangeKey(email).then((resp) => {
        dispatch({
          type: "PASSCHANGE_KEY_IS_SENT"
        });
        dispatch({type: "SET_PASSCHANGE_ERR_MSG", msg: null})
      },
      (resp) => dispatch({
        type: "SET_PASSCHANGE_ERR_MSG",
        msg: resp.responseText
      }));
  }
}

export const changePassword = (key, password, confirm) => {
  return (dispatch) => {
    sendNewPassword(key, password, confirm).then((resp) => {
        dispatch({
          type: "SET_PASSCHANGE_SUCCESS_MSG",
          msg: "Пароль успешно изменён. Войдите с новым паролем"
        });
        dispatch({type: "SET_PASSCHANGE_ERR_MSG", msg: null})
      },
      (resp) => dispatch({
        type: "SET_PASSCHANGE_ERR_MSG",
        msg: resp.responseText
      }));
  }
}

export const sendConfirmCode = (code) => {
  return (dispatch) => {
    reqAccountConfirm(code).then(
      (resp) => {
        dispatch({
          type: "SET_CONFIRMACC_SUCCESS_MSG", msg: "Аккаунт успешно подтверждён"
        });
        dispatch({
          type: "SET_CONFIRMACC_ERR_MSG", msg: null
        });
      },
      (resp) => {
        dispatch({
          type: "SET_CONFIRMACC_SUCCESS_MSG", msg: null
        });
        dispatch({
          type: "SET_CONFIRMACC_ERR_MSG", msg: resp.responseText
        });
      }
    );
  }
}
