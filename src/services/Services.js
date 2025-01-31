const dataSource = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async updateRegister(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, { where: { id: id } });
    console.log('lista de registros ->', listaDeRegistrosAtualizados);

    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }

    return true;
  }

}

module.exports = Services;