const { LivrosModel } = require("../models/LivrosModel");

class LivrosController {
  async buscarLivroPeloId(req, res) {
    const id = req.params.id;

    const livro = await new LivrosModel().buscarLivroPeloId(id);

    return res.status(200).json({
      livro: livro,
    });
  }

  async listarLivro(req,res){
    const livros = await new LivrosModel().listarLivros;

    return res.status(200).json(livros);
  }

  async atualizarLivroPeloId(req, res) {
    const id = req.params.id;
    const dados = req.body;

    const livro = await new LivrosModel().atualizarLivroPeloId(id, dados);

    if (!livro) {
      return res.status(404).json({
        mensagem: "Livro não encontrado",
      });
    }

    return res.status(200).json({
      livroAtualizado: livro,
    });
  }
}

module.exports = {
  LivrosController,
};
