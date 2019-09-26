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
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};

//  knex migrate:make fruit-schema ==> generate migration file (name starts date)
//  knex migrate:latest ==> Batch 1 run: 1 migrations ==> generate dev.sqlite3 (now just empty array, didn't add any data)

//  **EDIT**
//  knex migrate:rollback ==> undo the change but before you pushed all changed to master
//     - quick (simple) change, forgot to add sth 

//  knex migrate:make fruits-color ==> 2 migrate files
//   - add up and down fn and run migrate

//  knex migrate:latest ==> Batch 2 run: 1 migrations

//  **ADD data**
//  use postman -- endpoint POST

//  **Seed**
//  knex seed:make 01-fruits ==> add number in front of name ==> it will clear previous database and make
//  - 1. change table-name in the seed file and change `del` to `truncate` ==> truncate gives us starting id=1 each time
//  - 2. add array of seed data
//  knex seed:run