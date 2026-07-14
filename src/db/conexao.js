const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function conectarDb() {
  const db = await open({
    filename: "./src/db/biblioteca.db",
    driver: sqlite3.Database,
  });

  return db;
}

module.exports = {
  conectarDb,
};
