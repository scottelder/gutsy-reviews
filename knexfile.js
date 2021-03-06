// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: './db/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './db/seeds'
    }
  },

    /* 
    ************************************************************************************
          The following is leftover from the previous iteration of this service.
    ************************************************************************************
    */

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     host: process.env.PG_DEPLOY_HOST,
  //     database: 'jamesboyett',
  //     user: process.env.PG_DEPLOY_USERNAME,
  //     password: process.env.PG_DEPLOY_PW
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: `${__dirname }/knex/migrations`
  //   },
  //   seeds: {
  //     directory: `${__dirname }/knex/seeds`
  //   }
  // }

};
