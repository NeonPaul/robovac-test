var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

var app = express()
var webpackConfig = require('./webpack.config.js')

var devMid = webpackDevMiddleware(webpack(webpackConfig))
app.use(require('connect-history-api-fallback')())
app.use(devMid)

app.listen(8080, () => {
  console.log('Server listening at http://localhost:8080')
  console.log('Use Ctrl-C to exit')
})
