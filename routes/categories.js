const express = require('express');

const router = express.Router();

router.get('/categories/:categoryid/products/:productId', (req, res) => {
  const { categoryid, productId } = req.params;
  res.json({
    categoryid,
    productId,
  });
});

module.exports = router;
