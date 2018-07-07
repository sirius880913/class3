/*
* @Author: hzpanji
* @Date:   2018-06-24 16:19:42
* @Last Modified by:   hzpanji
* @Last Modified time: 2018-07-07 09:37:51
*/

define([
  'common/util',
  'components/group'
], function (u, Group, p = {}) {
  p.init = function () {
    this.form = document.getElementById('form')
    this.addEvent()
  }

  p.addEvent = function () {
    this.form.addEventListener('submit', function (event) {
      // TODO
        event.preventDefault()

      var res = p.verifyAll()

      if (!res) {
      }
    })
  }

  p.verifyAll = function () {
    var groups = this.form.getElementsByClassName('form-group')
    var res = true

    u.forEach(groups, function (item) {
      if (!Group.verify(item)) {
        res = false
      }
    })

    alert(res)
    return res
  }

  p.init()

  return p
})
