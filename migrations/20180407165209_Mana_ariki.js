
exports.up = (knex, Promise) => {
    return knex.schema.createTable('manaariki', (table) => {
      table.increments('id').primary()
      table.integer('profile_id')
      table.integer('gen')
      table.integer('parent_id')
      table.string('gender')
      table.string('partner_name')
      table.string('name')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('manaariki')
  }

