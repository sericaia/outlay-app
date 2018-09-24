module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || { user: 'changeme', database: 'some_db' },
};
