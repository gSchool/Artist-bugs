// Update with your config settings.
//comment
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/art'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
