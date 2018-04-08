exports.up = (knex, Promise) => {
    return knex.schema.createTable('profile', (table) => {
      table.increments('id').primary()
      table.string('born')
      table.string('died')
      table.string('address')
      table.string('phone')
      table.string('email')
      table.string('info')   
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profile')
  }
