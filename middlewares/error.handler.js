const { ValidationError } = require('sequelize');

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
const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
};
module.exports = { logErrors, ErrorHandler, boomErrorHandler, ormErrorHandler };
