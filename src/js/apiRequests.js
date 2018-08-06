import $ from 'jquery';

const publicConf = require('publicConf');

export const getCategories = () => {
  return $.ajax({
    url: publicConf.apiUrl + "categories",
    method: "GET",
    dataType: "json"
  });
}

export const getItems = (category, page) => {
  let reqUrl = publicConf.apiUrl +
    (!!category? "category/" + category: "items") +
    (!!page? "?page=" + page: "?page=1");
  return $.ajax({
    url: reqUrl,
    method: "GET",
    dataType: "json"
  });
}

export const getItemById = (id) => {
  return $.ajax({
    url: publicConf.apiUrl + "items/" + id,
    method: "GET",
    dataType: "json"
  })
}

export const regiserUser = (name, email, password, confirm) => {
  return $.ajax({
    url: publicConf.apiUrl + "register",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      "name": name,
      "email": email,
      "password": password,
      "confirmPassword": confirm
    })
  });
}

export const logUserIn = (email, password) => {
  return $.ajax({
    url: publicConf.apiUrl + "login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      "email": email,
      "password": password
    })
  });
}
