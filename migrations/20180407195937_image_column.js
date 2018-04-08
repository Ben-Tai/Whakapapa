
exports.up = (knex, Promise) => {
    return knex.schema.table('manaariki', (table) => {
         table.string('image')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.table('manaariki', (table) => {
        table.dropColumn('image')
  })
}
