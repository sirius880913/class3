/*
* @Author: hzpanji
* @Date:   2018-06-24 16:31:34
* @Last Modified by:   hzpanji
* @Last Modified time: 2018-06-24 17:04:34
*/

define(function (p) {
  p.verify = function (value) {
    return value && value.trim() !== ''
  }

  return p
})
