/*
* @Author: hzpanji
* @Date:   2018-06-24 13:32:38
* @Last Modified by:   hzpanji
* @Last Modified time: 2018-06-24 17:22:11
*/

define(function (p) {
  p.add = function (x, y) {
    return x + y;
　};

  p.forEach = function (array, callback) {
    for (var i = array.length - 1; i >= 0; i--) {
      callback(array[i])
    }
  }

  return p
});
