const express = require("express");

const { livrosRouter } = require("./routes/livros");
const { conectarDb } = require("./db/conexao");
const { logMiddleware, senhaMiddleware } = require("./middlewares/log");

const PORT = 3000;

conectarDb();

const servidor = express();

servidor.use(express.json());
servidor.use(logMiddleware);
servidor.use(senhaMiddleware);

servidor.use("/livros", livrosRouter);

servidor.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
