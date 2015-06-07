'use strict'

var InfoIcon = require('./index')

window.addEventListener('load', function() {
  var documentInfoIcon = InfoIcon()

  documentInfoIcon.addEventListener('click', function() {
    console.log('This is a document.')
  })

  document.body.appendChild(documentInfoIcon)

  var redBox = document.createElement('div')
  redBox.style.width = '100px'
  redBox.style.height = '100px'
  redBox.style.backgroundColor = 'red'
  redBox.style.position = 'relative'

  var redBoxInfoIcon = InfoIcon()

  redBoxInfoIcon.addEventListener('click', function() {
    console.log('This is a red box.')
  })

  redBox.appendChild(redBoxInfoIcon)

  document.body.appendChild(redBox)
})
