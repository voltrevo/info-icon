# info-icon
A subtle info icon

# Usage

`npm install --save info-icon`

```
'use strict'

var infoIcon = require('info-icon')

window.addEventListener('load', function() {
  var icon = infoIcon()

  icon.addEventListener('click', function() {
    console.log('clicked')
  })

  document.body.appendChild(icon)
})
```

# `require`? What's that?

If you don't use [browserify](http://browserify.org/), you could just grab `src/icon.css` and then do this:

```
<link rel='stylesheet' src='icon.css'/>
<div class='info-icon'>i</div>
```
