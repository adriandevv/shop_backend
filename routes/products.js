const express = require('express');
const productsService = require('../services/product.service');

const router = express.Router();
const service = new productsService();

router.get('/filter/', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = service.findOne(id);

  res.json(data);
});

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  service.create(body);
  res.status(201).json({
    message: 'registrado',
    data: body,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    data: body,
    id,
  });
});

module.exports = router;
