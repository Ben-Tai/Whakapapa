const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPeople,getPerson,getChildren

}
//gets people
function getPeople (testConn) {
  const conn = testConn || connection
  return conn('manaariki').select()
}

//get person
function getPerson (id,testConn) {
    const conn = testConn || connection
    return conn('profile')
    .join('manaariki', 'profile.id', 'manaariki.profile_id') 
    .where('manaariki.id', id)
    .select()
    .first()
}

//get children
function getChildren(id, testConn){
  const conn = testConn || connection
    return conn('manaariki')
    .where('manaariki.parent_id', id)
    .select()
}

