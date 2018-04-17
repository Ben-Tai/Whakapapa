var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/routes')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/router', router)

module.exports = server 