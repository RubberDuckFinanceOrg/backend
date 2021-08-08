export = {
  development: {
    client: "pg",
    connection: "postgres://localhost/financeApp",
    migrations: {
      directory: "./db/migrations",
      extension: "ts"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
      extension: "ts"
    },
    seeds: {
      directory: "./db/seeds/production"
    },
    useNullAsDefault: true
  }
};
