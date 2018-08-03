import $ from 'jquery';

const publicConf = require('publicConf');

export const getCategories = () => {
  let reqUrl = publicConf.apiUrl + "v1/categories";
  return $.ajax({
    url: reqUrl,
    method: "GET",
    dataType: "json"
  });
}
