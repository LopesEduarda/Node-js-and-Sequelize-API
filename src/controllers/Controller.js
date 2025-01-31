class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.getAll();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar registros' });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const atualizado = await this.entidadeService.updateUser(dadosAtualizados, Number(id));

      if (!atualizado) {
        return res.status(400).json({ error: 'Registro não atualizado.' });
      }

      return res.status(200).json(atualizado);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
  }

}

module.exports = Controller;