const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  ErrorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log('servidor encendido corriendo en el puerto:' + port);
});
