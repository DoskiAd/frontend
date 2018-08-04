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
