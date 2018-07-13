'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/router');
const app = express();
const db = require('./src/models/index');

/*db.sequelize.sync({force: false}).then(() => {
  db.Level.create({
    libelle: "Débutant"
  })
  db.Level.create({
    libelle: "Intermédiaire"
  })
  db.Level.create({
    libelle: "Maîtrise"
  })
  db.Level.create({
    libelle: "Expert"
  })
  app.use('/', router);
  app.listen('3000');
}).catch(err => {
  console.log(err);
})*/

app.use(cors());
app.use('/', router);

app.listen('3000');

  