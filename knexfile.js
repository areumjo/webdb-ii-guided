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
