'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/router');
const app = express();
const db = require('./src/models/index');

app.use(cors());

db.sequelize.sync({force: false}).then(() => {
  app.use('/', router);
  app.listen('3000');
}).catch(err => {
  console.log(err);
})


/*app.use('/', router);

app.listen('3000');*/

  