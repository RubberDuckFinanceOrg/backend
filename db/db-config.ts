// import Knex from "knex";
// import knexConfig from "../knexfile";
// export = Knex(knexConfig.development);



import Knex from 'knex'
// const config: Config = require('../knexfile').development;
import config from '../knexfile'

type Config = {
  development: {
    client: string,
    connection: string,
    migrations: {
      directory: string,
      extension: string
    },
    seeds: {
      directory: string
    },
    useNullAsDefault: boolean
  }
}
// !! change development to production for heroku
// TODO: Create type for config

const db: Knex = Knex(config.development)
// module.exports = knex(configOptions);
export = db
