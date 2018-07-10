'use strict';

module.exports = {
    development: {
      dialect: "postgres",
      user: process.env.DB_USERNAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
    },
    production: {
      user: process.env.DB_USERNAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'postgres',
    }
  };