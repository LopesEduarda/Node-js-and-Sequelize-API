const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor(nomeDoModel) {
    super('Pessoa');
  }


}

module.exports = PessoaServices;