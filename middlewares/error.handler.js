function logErrors(err, req, res, next) {
  console.error('logError', err);
  next(err);
}
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
function ErrorHandler(err, req, res, next) {
  res.status(500).json({
    Message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, ErrorHandler, boomErrorHandler };
