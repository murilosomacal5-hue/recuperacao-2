const { conectarDb } = require("../db/conexao");

class LivrosModel {
  async buscarLivroPeloId(id) {
    const db = await conectarDb();

    const livro = await db.get("SELECT * FROM livros WHERE id = ?", [id]);

    return livro;
  }

  async atualizarLivroPeloId(id, dados) {
    const db = await conectarDb();

    const livroExistente = await this.buscarLivroPeloId(id);

    if (!livroExistente) {
      return null;
    }

    await db.run(
      `UPDATE livros
       SET titulo = ?, autor = ?, genero = ?, editora = ?, ano_publicacao = ?, numero_paginas = ?
       WHERE id = ?`,
      [
        dados.titulo,
        dados.autor,
        dados.genero,
        dados.editora,
        dados.ano_publicacao,
        dados.numero_paginas,
        id,
      ],
    );

    return this.buscarLivroPeloId(id);
  }
}

module.exports = {
  LivrosModel,
};
