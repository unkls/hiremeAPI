"use strict";
const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./src/router');
require('dotenv').config();

const db = require('./src/models/index');

/*db.sequelize.sync({force: false}).then(() => {
  app.use('/', router);
  app.listen('3000');
}).catch(err => {
  console.log(err);
})*/

app.use('/', router);
app.listen('3000');

