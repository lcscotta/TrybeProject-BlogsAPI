const errorMiddleware = (err, _req, res, _next) => {
console.log(err);
res
    .status(err.status || 500)
    .json({
      message: err.message || 'Erro inesperado. Por favor, tente mais tarde',
    });
};

module.exports = errorMiddleware; 