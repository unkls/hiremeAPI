"use strict";
const express = require('express');
const app = express();
const router = require('./src/router');
require('dotenv').config();

const db = require('./src/models/index');

db.sequelize.sync({force: true}).then(() => {
  console.log("Success");
  app.use('/', router);
  app.listen('3000');
}).catch(err => {
  console.log(err);
})

