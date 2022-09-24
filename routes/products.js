const express = require('express');
const productsService = require('../services/product.service');

const router = express.Router();
const service = new productsService();

router.get('/filter/', async (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.findOne(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await service.create(body);
  res.status(201).json({
    message: 'registrado',
    data: body,
  });
});

router.patch('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.json({
      message: 'Updated',
      data: body,
      id,
    });
  } catch (error) {
    next(error);
  }
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
