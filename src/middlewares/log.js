const SENHAFIXA = "1234"

function logMiddleware(req, res, next) {
  console.log(`${req.method} ${req.url} --- ${new Date().toLocaleString()}`);

  next();
}

function senhaMiddleware(req, res, next) {
  const senha = req.headers.senha;

  if (senha !== SENHAFIXA){
      return res.status(401).json()
  }
  
  next();
}

module.exports = {
  logMiddleware,
  senhaMiddleware
};
