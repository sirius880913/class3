/*
* @Author: hzpanji
* @Date:   2018-06-24 17:00:20
* @Last Modified by:   hzpanji
* @Last Modified time: 2018-07-07 09:43:49
*/

define([
  'components/verify'
], function (Verify, p = {}) {
  p.verify = function (element) {
    if (element.children[0].tagName === 'INPUT') {
      return Verify.verify(element.children[0].value)
    }

    return true
  }

  p.showError = function (element) {

  }

  p.removeError = function (element) {

  }

  return p
})
