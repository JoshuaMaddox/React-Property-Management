// LOAD ENV VARIABLES
require('dotenv').config({ silent: true })

// SET SERVER PORT
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/property-manager'

// REQUIRES
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const webpack = require('webpack')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')


//MONGOOSE CONFIG
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `MongoDB connected to ${MONGODB_URI}`)
})

// APP DECLARATION
const app = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('build'))

//WEBPACK
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, 
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

// ROUTES
app.use('/api', require('./routes/api'))

app.get('*', (req, res) => {
  let filepath = path.resolve('./build/index.html');
  res.sendFile(filepath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`)
});
