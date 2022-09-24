const express = require('express');
const router = express.Router();
const userService = require('../services/users.service');

const service = new userService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.findOne(id);
  res.status(200).json({
    response,
  });
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
  const newData = service.update(id, body);
  res.json({
    message: 'Updated',
    data: newData,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const message = service.delete(id);
  res.status(200).json({
    message,
  });
});

module.exports = router;
