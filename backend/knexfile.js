// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  client:'pg',
  connection:{
    host:'0.0.0.0',
    user:'postgres',
    port:5432,
    password:'123456',
    database:'knowledge'
  },
  pool:{
    min:2,
    max:10
  },
  migration:{
    tableName:'knex_migrations'
  }
}


