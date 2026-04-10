export default {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'postgres'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    }
  },
};
