const publicConf = require("publicConf");

export const getByKeyVal = (array, val, key) => {
  let output = array.filter((e) => (e[key] == val));
  output.length >= 1
    ? output = output[0]
    : output = null
  return output;
}

export const formImageUrl = (itemId, imgNum) => {
  return publicConf.apiUrl + "items/" + itemId + "/photo/" + imgNum;
}
