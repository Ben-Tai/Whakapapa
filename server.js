var path = require('path')
var bodyParser = require('body-parser')
const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

var hbsConfig = {
    defaultLayout: 'main',
    extname: 'hbs'
  }

server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

server.use(express.urlencoded({extended: true}))

//middleware

server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))


server.use('/', routes)

module.exports = server 