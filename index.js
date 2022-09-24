const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());


routerApi(app);

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});
app.get('/nova-ruta', (req, res) => {
  res.json({
    hola: 'madamos un json jeje',
    todoSaleBien: 'aver si cierto',
  });
});

app.listen(port, () => {
  console.log('servidor encendido corriendo en el puerto:' + port);
});
