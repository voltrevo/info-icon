# info-icon
A subtle info icon

# Quick Demo

```
git checkout git@github.com:voltrevo/info-icon.git
cd info-icon
npm install
npm run demo
```

Visit [http://localhost:8080/](http://localhost:8080/)

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
