const express = require("express");
const { LivrosController } = require("../controllers/LivrosController");

const livrosRouter = express.Router();

livrosRouter.get("/:id", new LivrosController().buscarLivroPeloId);
livrosRouter.get("/", new LivrosController().listarLivro);
livrosRouter.delete("esquecioqescreveraquidentro")
livrosRouter.put("/:id", new LivrosController().atualizarLivroPeloId);

module.exports = {
  livrosRouter,
};
