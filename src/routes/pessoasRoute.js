const express = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController = new PessoaController();
const router = express.Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));

module.exports = router;