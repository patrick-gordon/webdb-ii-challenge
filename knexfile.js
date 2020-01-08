// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
  useNullAsDefault: true, //have to add this one
  migrations: {
    directory: './data/migrations' // make migrations go into data folder
    },
  }
}
