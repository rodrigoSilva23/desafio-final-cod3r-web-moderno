require('dotenv').config()

// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  client:process.env.DB_CLIENT,
  connection:{
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
  },
  pool:{
    min:2,
    max:10
  },
  migration:{
    tableName:'knex_migrations'
  },
  seeds: {
    directory: './seeds'
}
}


