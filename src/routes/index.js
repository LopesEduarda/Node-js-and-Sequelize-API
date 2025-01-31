const express = require('express');
const pessoas = require('./pessoasRoute');


const router = express.Router();

router.use('/users', pessoas);

module.exports = app => {
  app.use(express.json(), pessoas);
};