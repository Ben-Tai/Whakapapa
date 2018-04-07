const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPeople

}
//gets all users
function getPeople (testConn) {
  const conn = testConn || connection
  return conn('manaariki').select()
}