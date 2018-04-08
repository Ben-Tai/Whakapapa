exports.seed = function (knex, Promise) {
    return knex('profile').del()
      .then(function () {
        return knex('profile').insert([
{id: 101, address:'Mauke',info:'Ariki of Mauke'}
      
])
})
}