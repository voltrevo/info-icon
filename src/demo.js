'use strict'

var infoIcon = require('./index')

window.addEventListener('load', function() {
  var icon = infoIcon()
  icon.addEventListener('click', function() {
    console.log('clicked')
  })

  document.body.appendChild(icon)
})
