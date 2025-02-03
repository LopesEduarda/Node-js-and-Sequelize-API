const Services = require('./Services.js');

class MatriculaServices extends Services {
  constructor(nomeDoModel) {
    super('Matricula');
  }
}

module.exports = MatriculaServices;