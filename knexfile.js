// Update with your config settings.
// only work with 'development' and add 'useNullAsDefault' to prevent bug

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

};

//  knex migrate:make fruit-schema ==> generate migration file (name starts date)
//  knex migrate:latest ==> Batch 1 run: 1 migrations ==> generate dev.sqlite3 (now just empty array, didn't add any data)