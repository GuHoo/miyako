const path = require('path')
const express = require('express')
const livereload = require('easy-livereload')

const app = express()

app.use(express.static('./public'))

app.use(livereload({
  watchDirs: [
    path.join(__dirname, 'public')
  ],
}))

app.listen('8765', () => console.log(`Listening in localhost:8765`))
