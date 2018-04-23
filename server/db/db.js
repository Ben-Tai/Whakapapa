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
    return conn('manaariki')
    // .join('profile', 'manaariki.profile_id', 'profile.id') 
    .where('manaariki.id', id)
    .first()
      .then(person => {
        return getChildren(id, testConn)
          .then(children => {
            person.children = children
            return person
          })
      })
}

//get children
function getChildren(id, testConn){
  const conn = testConn || connection
    return conn('manaariki')
    .where('manaariki.parent_id', id)
    .select()
}

